// components/Navbar.jsx
import React, { useState } from "react";
import Image from "next/image";
import ColoredHamBurger from "@/assets/burger-menu-colored.svg";
import WhiteHamBurger from "@/assets/burger-menu-white.svg";

const Navbar = ({ hasScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleAnonAadhaarLogin = async () => {
        setIsAuthenticating(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Authentication failed:", error);
        } finally {
            setIsAuthenticating(false);
        }
    };

    const buttonBaseStyles = `
        px-5 py-2 rounded-[14px] font-medium
        transform transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    `;

    const buttonColorStyles = isAuthenticated
        ? `bg-green-500 hover:bg-green-600 text-white
           focus:ring-green-500 hover:shadow-green-500/50`
        : `bg-gradient-to-r from-orange-500 to-red-500 
           hover:from-orange-600 hover:to-red-600 text-white
           focus:ring-orange-500 hover:shadow-orange-500/50
           relative overflow-hidden
           before:absolute before:inset-0
           before:bg-gradient-to-r before:from-orange-600 before:to-red-600
           before:opacity-0 before:transition-opacity before:duration-300
           hover:before:opacity-100
           [&>span]:relative`;

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
                        onClick={handleAnonAadhaarLogin}
                        disabled={isAuthenticating}
                        className={`${buttonBaseStyles} ${buttonColorStyles}`}
                    >
                        <span className="flex items-center justify-center">
                            {isAuthenticating ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verifying...
                                </>
                            ) : isAuthenticated ? (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Verified
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Verify with Anon Aadhaar
                                </>
                            )}
                        </span>
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div
                    onClick={toggleMenu}
                    className={`md:hidden w-[62px] h-[62px] flex items-center justify-center cursor-pointer 
                        rounded-[10px] transition-colors duration-200
                        ${isMenuOpen ? "bg-white hover:bg-gray-100" : "hover:bg-gray-800"}`}
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
                className={`fixed top-[78.8px] w-full bg-white transition-transform duration-500 ease-in-out 
                    ${isMenuOpen ? "translate-y-0" : "translate-y-[-135%]"}`}
            >
                <div className="w-[90%] mx-auto py-4">
                    <p className="py-2 px-4 text-primary-text hover:bg-gray-100 rounded-lg transition-colors duration-200">Product</p>
                    <p className="py-2 px-4 text-primary-text hover:bg-gray-100 rounded-lg transition-colors duration-200">About</p>
                    <p className="py-2 px-4 text-primary-text hover:bg-gray-100 rounded-lg transition-colors duration-200">Features</p>
                    <p className="py-2 px-4 text-primary-text hover:bg-gray-100 rounded-lg transition-colors duration-200">Pricing</p>
                    <div className="flex flex-col pt-4 gap-4">
                        <button
                            onClick={handleAnonAadhaarLogin}
                            disabled={isAuthenticating}
                            className={`${buttonBaseStyles} ${buttonColorStyles}`}
                        >
                            <span className="flex items-center justify-center">
                                {isAuthenticating ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Verifying...
                                    </>
                                ) : isAuthenticated ? (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Verified
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Verify with Anon Aadhaar
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Effect */}
            <div
                className={`absolute top-0 w-full h-[78.8px] bg-white transition-opacity duration-200 ease-in-out 
                    ${hasScrolled || isMenuOpen ? "opacity-100" : "opacity-0"}`}
            ></div>
        </div>
    );
};

export default Navbar;