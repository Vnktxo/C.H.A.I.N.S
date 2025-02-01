// pages/Contact.js
import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import { useRouter } from "next/router";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [error, setError] = useState("");
    const [isConnecting, setIsConnecting] = useState(false);
    const router = useRouter();

    // Function to connect wallet
    const connectWallet = async () => {
        setError(""); // Clear any previous errors
        setIsConnecting(true);
        
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                setWalletAddress(accounts[0]);
            } catch (error) {
                // Handle specific error cases
                if (error.code === 4001 || error.code === 'ACTION_REJECTED') {
                    setError("Connection rejected. Please approve the connection request in your wallet.");
                } else if (error.code === -32002) {
                    setError("Please check your MetaMask. A connection request is already pending.");
                } else {
                    setError("Failed to connect wallet. Please try again.");
                    console.error("Detailed wallet error:", error);
                }
            } finally {
                setIsConnecting(false);
            }
        } else {
            setError("MetaMask not detected. Please install MetaMask to continue.");
            setIsConnecting(false);
        }
    };

    // Auto-connect if wallet was connected before
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                }
            }).catch((err) => {
                console.error("Error checking wallet connection:", err);
            });

            // Listen for account changes
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                } else {
                    setWalletAddress("");
                }
            });
        }

        // Cleanup listener on component unmount
        return () => {
            if (window.ethereum && window.ethereum.removeListener) {
                window.ethereum.removeListener('accountsChanged', () => {});
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-center text-3xl mt-10 mb-5">Contact Us</h1>
                <p className="text-center mb-12">Feel free to reach out for more information.</p>

                <div className="max-w-3xl mx-auto">
                    {/* Wallet Connection */}
                    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-6 rounded-lg mb-8 gap-4">
                        <h2 className="text-2xl font-bold">Your Profile</h2>
                        <div className="flex flex-col items-center md:items-end gap-2">
                            {!walletAddress ? (
                                <button
                                    onClick={connectWallet}
                                    disabled={isConnecting}
                                    className={`bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${isConnecting ? 'opacity-50' : ''}`}
                                >
                                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                                </button>
                            ) : (
                                <p className="text-sm bg-gray-700 px-4 py-2 rounded-md">
                                    Wallet: {walletAddress.substring(0, 6)}...
                                    {walletAddress.substring(walletAddress.length - 4)}
                                </p>
                            )}
                            {error && (
                                <p className="text-red-400 text-sm text-center md:text-right">
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Investments Section */}
                    <div className="bg-gray-800 p-6 rounded-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Current Investments</h2>
                        <p className="text-gray-400">No investments yet.</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            onClick={() => router.push("/request-funding")}
                            className="bg-green-600 px-4 py-3 rounded-md hover:bg-green-700 transition-colors w-full disabled:opacity-50"
                            disabled={!walletAddress}
                        >
                            Request Funding
                        </button>
                        <button
                            onClick={() => router.push("/projects")}
                            className="bg-purple-600 px-4 py-3 rounded-md hover:bg-purple-700 transition-colors w-full disabled:opacity-50"
                            disabled={!walletAddress}
                        >
                            Explore Projects
                        </button>
                    </div>
                    {!walletAddress && (
                        <p className="text-gray-400 text-sm text-center mt-4">
                            Please connect your wallet to access these features
                        </p>
                    )}
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Contact;