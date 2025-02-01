import React, { useState, useEffect } from "react";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]);

  // Initial projects (default ones)
  const initialProjects = [
    { id: 1, title: "Blockchain Voting System", description: "A secure and transparent voting platform on the blockchain." },
    { id: 2, title: "DeFi Lending Protocol", description: "A decentralized lending platform for crypto assets." },
    { id: 3, title: "NFT Marketplace", description: "A platform for trading digital collectibles securely." },
    { id: 4, title: "Supply Chain Tracking", description: "A blockchain-based system for tracking goods from source to consumer." },
    { id: 5, title: "Crypto Payment Gateway", description: "A payment gateway allowing businesses to accept crypto payments." },
    { id: 6, title: "DAO Governance Platform", description: "A decentralized autonomous organization governance system." },
    { id: 7, title: "Decentralized Identity", description: "A blockchain-based identity verification system." },
    { id: 8, title: "Real Estate Tokenization", description: "A platform for fractional ownership of real estate via blockchain." },
    { id: 9, title: "Carbon Credit Marketplace", description: "A decentralized exchange for carbon credits." },
    { id: 10, title: "Metaverse Land Ownership", description: "A blockchain platform for owning virtual land in the metaverse." },
  ];

  // Load projects from localStorage
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects([...initialProjects, ...storedProjects]);
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-white">
      {/* Navbar */}
      <nav className="bg-black border-b border-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-[2.5rem] font-bold">CHAINS</a>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="flex justify-center mt-12">
        <input
          type="text"
          placeholder="Search for projects..."
          className="w-2/3 p-4 text-lg rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Scrollable Project Grid with Hidden Scrollbar */}
      <div className="max-w-7xl mx-auto mt-12 px-6 overflow-y-auto max-h-[600px] scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="bg-black p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white mt-2">{project.description}</p>
                {project.requiredFunds && (
                  <p className="text-green-400 mt-2">Required Funds: {project.requiredFunds} ETH</p>
                )}
                {project.acquiredFunds !== undefined && (
                  <p className="text-yellow-400 mt-2">Acquired Funds: {project.acquiredFunds} ETH</p>
                )}
                <button className="mt-4 bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-900 transition-colors">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No projects found</p>
          )}
        </div>
      </div>

      {/* Tailwind CSS to Hide Scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  
          scrollbar-width: none;  
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
