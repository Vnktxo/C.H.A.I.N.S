import React, { useState } from "react";
import { useRouter } from "next/router"; // Import the router hook

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState("");  // State to hold the verification message
    const router = useRouter();  // Initialize router

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleVerifyButtonClick = () => {
        setIsAuthenticating(true); // Start authenticating
        setVerificationStatus("Anon Aadhaar is Verified"); // Simulate verification success

        // After 2 seconds (simulating a delay), navigate to the contact page
        setTimeout(() => {
            setIsAuthenticating(false); // Stop authenticating
            router.push("/contact"); // Navigate to contact page
        }, 2000); // Simulated delay
    };

    const buttonBaseStyles = `
        px-5 py-2 rounded-[14px] font-medium
        transform transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    `;

    const buttonColorStyles = `
        bg-gradient-to-r from-orange-500 to-red-500 
        hover:from-orange-600 hover:to-red-600 text-white
        focus:ring-orange-500 hover:shadow-orange-500/50
        relative overflow-hidden
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-orange-600 before:to-red-600
        before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
        [&>span]:relative
    `;

    return (
        <div className="w-full h-fit fixed top-0 z-10 bg-black shadow-md">
            <div className="max-w-[1340px] py-[10px] mx-auto flex items-center justify-between px-4">
                <div className="flex items-center">
                    <div className="hidden lg:block pl-[20px] text-[#ffffff] text-[2rem] font-bold">
                        CHAINS
                    </div>
                </div>
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={handleVerifyButtonClick} // When clicked, trigger the function
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
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0=" />
                                    </svg>
                                    Verify with Anon Aadhaar
                                </>
                            )}
                        </span>
                    </button>
                </div>
            </div>

            {/* Display verification status message */}
            {verificationStatus && (
                <div className="mt-4 text-center text-white">
                    <p>{verificationStatus}</p>
                </div>
            )}
        </div>
    );
};

export default Navbar;
