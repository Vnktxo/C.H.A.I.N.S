import React, { useState, useEffect } from "react";
import Image from "next/image";
import ColoredHamBurger from "@/assets/burger-menu-colored.svg";
import WhiteHamBurger from "@/assets/burger-menu-white.svg";

const Navbar = ({ hasScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      console.log("MetaMask detected");
    } else {
      console.warn("MetaMask not detected");
    }
  }, []);


  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected! Please install MetaMask.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]); 
        console.log("Connected Address:", accounts[0]);
      } else {
        alert("No accounts found!");
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Error connecting wallet. Check console for details.");
    }
  };

  return (
    <div className="w-full h-fit fixed top-0 z-10 bg-black shadow-md">
      {/* Desktop and Tablet View */}
      <div className="max-w-[1340px] py-[10px] mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <div className="hidden lg:block pl-[20px] text-[#ffffff] text-[2rem] font-bold">
            CHAINS
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            onClick={connectWallet}
            className="px-5 py-2 bg-white text-black rounded-[14px] font-medium hover:bg-white"
          >
            {walletAddress
              ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
              : "Connect Wallet"}
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div
          onClick={toggleMenu}
          className={`md:hidden w-[62px] h-[62px] flex items-center justify-center cursor-pointer rounded-[10px] ${isMenuOpen && "bg-white"}`}
        >
          <Image
            src={isMenuOpen ? WhiteHamBurger : ColoredHamBurger}
            alt="hamburger icon"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[78.8px] w-full bg-white transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "translate-y-[-135%]"
        }`}
      >
        <div className="w-[90%] mx-auto py-4">
          <p className="py-2 px-4 text-primary-text">Product</p>
          <p className="py-2 px-4 text-primary-text">About</p>
          <p className="py-2 px-4 text-primary-text">Features</p>
          <p className="py-2 px-4 text-primary-text">Pricing</p>
          <div className="flex flex-col pt-4 gap-4">
            <button
              onClick={connectWallet}
              className="px-5 py-2 bg-white text-black rounded-[12px] font-medium hover:bg-white"
            >
              {walletAddress
                ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Effect */}
      <div
        className={`absolute top-0 w-full h-[78.8px] bg-white transition-opacity duration-200 ease-in-out ${
          hasScrolled || isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Navbar;
