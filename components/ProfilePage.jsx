import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";

const Profile = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const router = useRouter();

  // Function to connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]); // Set the first account
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  // Auto-connect if wallet was connected before
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        {!walletAddress ? (
          <button
            onClick={connectWallet}
            className="bg-blue-600 px-4 py-2 rounded-md"
          >
            Connect Wallet
          </button>
        ) : (
          <p className="text-sm bg-gray-700 px-4 py-2 rounded-md">
            Wallet: {walletAddress.substring(0, 6)}...
            {walletAddress.substring(walletAddress.length - 4)}
          </p>
        )}
      </div>

      {/* Investments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Current Investments</h2>
        <p className="text-gray-400">No investments yet.</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col space-y-4">
        <button
          onClick={() => router.push("/request-funding")}
          className="bg-green-600 px-4 py-2 rounded-md w-full"
        >
          Request Funding
        </button>
        <button
          onClick={() => router.push("/projects")}
          className="bg-purple-600 px-4 py-2 rounded-md w-full"
        >
          Explore Projects
        </button>
      </div>
    </div>
  );
};

export default Profile;
