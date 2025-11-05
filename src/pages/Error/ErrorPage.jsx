import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* 404 Image */}
      <div className="w-full max-w-md mb-6">
        <img
          src="/src/assets/error-404.png" // 👉 replace this with your own image path
          alt="404 illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Oops, page not found!
      </h1>
      <p className="text-gray-500 text-sm md:text-base mb-6 text-center">
        The page you are looking for is not available.
      </p>

      {/* Button */}
      <button
        onClick={() => window.history.back()}
        className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
