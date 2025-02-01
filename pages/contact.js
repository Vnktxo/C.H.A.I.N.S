import React, { useState, useEffect } from 'react';
import { Menu, User } from 'lucide-react';

const WalletPage = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    setError('');
    setIsConnecting(true);
    
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        if (error.code === 4001 || error.code === 'ACTION_REJECTED') {
          setError('Connection rejected. Please approve the connection request.');
        } else if (error.code === -32002) {
          setError('Please check your MetaMask. A connection request is pending.');
        } else {
          setError('Failed to connect wallet. Please try again.');
          console.error('Wallet error:', error);
        }
      } finally {
        setIsConnecting(false);
      }
    } else {
      setError('MetaMask not detected. Please install MetaMask.');
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts) => {
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        })
        .catch(console.error);

      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress('');
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        if (window.ethereum?.removeListener) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#b2af00] to-black">
      {/* Navbar */}
      <nav className="bg-black border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-white text-[2.2rem] font-bold">
              CHAINS
            </a>

            <div className="flex items-center">
              {!walletAddress ? (
                <button
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all duration-300 disabled:opacity-50"
                >
                  {isConnecting ? "Connecting..." : "Connect Wallet"}
                </button>
              ) : (
                <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-md">
                  <div className="bg-white p-2 rounded-full">
                    <User className="h-5 w-5 text-gray-300" />
                  </div>
                  <span className="text-sm text-white">
                    {walletAddress.substring(0, 6)}...
                    {walletAddress.substring(walletAddress.length - 4)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        {error && (
          <div className="bg-red-500 text-white text-sm px-4 py-2 text-center">
            {error}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-16 py-24">
        <div className="grid grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="bg-[#000000] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h2 className="text-[2rem] font-bold text-white mb-4">Profile</h2>
            {walletAddress ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full">
                    <User className="h-8 w-8 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-white">Connected Wallet</p>
                    <p className="text-sm text-white break-all">{walletAddress}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-white">Please connect your wallet to view profile</p>
            )}
          </div>

          {/* Explore Projects Card */}
          <div className="bg-[#000000] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h2 className="text-[2rem] font-bold text-white mb-4">Explore Projects</h2>
            <p className="text-white mb-6">
              Discover and invest in innovative projects across various sectors.
            </p>
            <button
              onClick={() => (window.location.href = "/projects")}
              className="w-full bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-900 transition-all duration-300"
              disabled={!walletAddress}
            >
              View All Projects
            </button>
          </div>

          {/* Current Investments Card */}
          <div className="bg-[#000000] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h2 className="text-[2rem] font-bold text-white mb-4">Current Investments</h2>
            <div className="space-y-2">
              {walletAddress ? (
                <p className="text-[1rem] text-white">No active investments found</p>
              ) : (
                <p className="text-white">Connect wallet to view investments</p>
              )}
            </div>
          </div>

          {/* Request Funding Card */}
          <div className="bg-[#000000] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h2 className="text-[2rem] font-bold text-white mb-4">Request Funding</h2>
            <p className="text-white mb-6">
              Submit your project for funding and connect with potential investors.
            </p>
            <button
              onClick={() => (window.location.href = "/request-funding")}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition-all duration-300"
              disabled={!walletAddress}
            >
              Start Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;