import React, { useState } from "react";
import { useParams } from "react-router";
import { FaStar, FaDownload } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import toast, { Toaster } from "react-hot-toast";

const reviewData = [
  { name: "5★", reviews: 80 },
  { name: "4★", reviews: 40 },
  { name: "3★", reviews: 25 },
  { name: "2★", reviews: 10 },
  { name: "1★", reviews: 5 },
];

const BookDetails = () => {
  const { id } = useParams();
  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(true);
    toast.success("App Installed Successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <Toaster position="top-right" />
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="w-full md:w-1/3 bg-gray-200 rounded-xl h-60"></div>

        {/* App Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">App #{id}</h1>
          <div className="flex items-center gap-4 text-gray-700 mb-3">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-500" /> 5.0
            </span>
            <span className="flex items-center gap-1">
              <FaDownload className="text-green-600" /> 9M+
            </span>
            <span>10K Reviews</span>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-5 py-2 rounded-md text-white font-medium ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* Review Chart */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">App Review Chart</h2>
        <div className="w-full h-64 bg-white p-4 rounded-xl shadow">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={reviewData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reviews" fill="#8884d8" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">App Description</h2>
        <p className="text-gray-700 leading-relaxed">
          This app helps you focus, stay productive, and manage your daily routine effectively.
          Designed for students and professionals, it tracks your progress and builds better habits.
        </p>
      </div>
    </div>
  );
};

export default BookDetails;