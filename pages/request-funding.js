import React, { useState } from "react";

const RequestFundingPage = ({ addProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requiredFunds, setRequiredFunds] = useState("");
  const [acquiredFunds] = useState(0); // Initially, acquired funds are 0
  const [error, setError] = useState("");

  const handlePost = () => {
    if (!title.trim() || !description.trim() || !requiredFunds.trim()) {
      setError("All fields are required.");
      return;
    }

    if (description.split(" ").length > 250) {
      setError("Description cannot exceed 250 words.");
      return;
    }

    if (isNaN(requiredFunds) || requiredFunds <= 0) {
      setError("Required funds must be a valid positive number.");
      return;
    }

    const newProject = {
      id: Date.now(),
      title,
      description,
      requiredFunds,
      acquiredFunds, // Initially 0
    };

    addProject(newProject);

    // Clear fields after submission
    setTitle("");
    setDescription("");
    setRequiredFunds("");
    setError("");

    // Redirect to projects page
    window.location.href = "/projects";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center py-12">
      
      
      <h1 className="text-3xl font-bold mb-6">Request Funding</h1>

      <div className="w-4/5 md:w-1/2">
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter your startup title"
          className="w-full p-3 mb-4 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description Box */}
        <textarea
          placeholder="Describe your startup (max 250 words)"
          className="w-full p-3 h-40 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Required Funds Input */}
        <input
          type="number"
          placeholder="Enter required funds (in ETH)"
          className="w-full p-3 mt-4 mb-4 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={requiredFunds}
          onChange={(e) => setRequiredFunds(e.target.value)}
        />

        {/* Acquired Funds Display */}
        <p className="text-white text-lg mb-4">
          Acquired Funds: <span className="text-green-400">{acquiredFunds} ETH</span>
        </p>

        {/* Post Button */}
        <button
          onClick={handlePost}
          className="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
        >
          Post Request
        </button>
      </div>
    </div>
  );
};

export default RequestFundingPage;
