import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import heroimage from "../../assets/hero.png"

const Banner = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center text-center py-20 px-4">
      
      

      {/* মূল হেডিং */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        We Build{" "}
        <span className="text-purple-600">Productive</span> Apps
      </h1>

      {/* সাবহেডিং / বর্ণনা */}
      <p className="text-gray-600 mt-4 max-w-2xl">
        <span className="font-semibold">HERO.IO</span> we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.।
      </p>

      {/* বোতাম (Google Play & App Store) */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="#"
          className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:shadow-md transition"
        >
          <FaGooglePlay className="text-green-500 text-lg" />
          <span className="font-medium text-gray-800">Google Play</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:shadow-md transition"
        >
          <SiAppstore className="text-blue-500 text-lg" />
          <span className="font-medium text-gray-800">App Store</span>
        </a>
      </div>
      <div>
        <img src={heroimage} alt="" />
      </div>

    </div>
  );
};

export default Banner;
