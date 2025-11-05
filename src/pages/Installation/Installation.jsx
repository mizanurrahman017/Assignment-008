import React, { useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const installedApps = [
  {
    id: 1,
    title: "Forest: Focus For Productivity",
    downloads: "9M",
    rating: "5",
    size: "258 MB",
  },
  {
    id: 2,
    title: "Forest: Focus For Productivity",
    downloads: "9M",
    rating: "5",
    size: "258 MB",
  },
  {
    id: 3,
    title: "Forest: Focus For Productivity",
    downloads: "9M",
    rating: "5",
    size: "258 MB",
  },
];

const Installation = () => {
  const [sortBy, setSortBy] = useState("Size");

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Installed Apps</h1>
        <p className="text-gray-500 text-sm mt-1">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="font-medium text-gray-700 mb-3 md:mb-0">
          {installedApps.length} Apps Found
        </p>
        <select
          className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Size">Sort By Size</option>
          <option value="Name">Sort By Name</option>
          <option value="Rating">Sort By Rating</option>
        </select>
      </div>

      {/* Apps List */}
      <div className="space-y-4">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white flex items-center justify-between border border-gray-200 rounded-xl p-4 hover:shadow transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
              <div>
                <h3 className="text-gray-800 font-medium text-sm">
                  {app.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <div className="flex items-center gap-1">
                    <FaDownload className="text-green-500" />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{app.rating}</span>
                  </div>
                  <span>{app.size}</span>
                </div>
              </div>
            </div>

            <button className="bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-emerald-600 transition-all">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
