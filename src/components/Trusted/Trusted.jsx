import React from "react";

const Trusted = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Trusted By Millions, Built For You
      </h2>

      {/* Stats Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {/* Total Downloads */}
        <div>
          <h3 className="text-gray-200 text-sm uppercase tracking-wide">
            Total Downloads
          </h3>
          <p className="text-4xl font-extrabold mt-2">29.6M</p>
          <p className="text-sm text-gray-200 mt-1">
            <span className="text-white font-semibold">21%</span> More Than Last Month
          </p>
        </div>

        {/* Total Reviews */}
        <div>
          <h3 className="text-gray-200 text-sm uppercase tracking-wide">
            Total Reviews
          </h3>
          <p className="text-4xl font-extrabold mt-2">906K</p>
          <p className="text-sm text-gray-200 mt-1">
            <span className="text-white font-semibold">46%</span> More Than Last Month
          </p>
        </div>

        {/* Active Apps */}
        <div>
          <h3 className="text-gray-200 text-sm uppercase tracking-wide">
            Active Apps
          </h3>
          <p className="text-4xl font-extrabold mt-2">132+</p>
          <p className="text-sm text-gray-200 mt-1">
            <span className="text-white font-semibold">31</span> More Will Launch
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
