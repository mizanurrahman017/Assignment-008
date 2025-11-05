import React, { useState } from "react";
import { FaStar, FaDownload, FaSearch } from "react-icons/fa";

const allApps = [
  { id: 1, title: "Forest: Focus For Productivity", downloads: "9M", rating: "5" },
  { id: 2, title: "SmPlan: ToDo List With Reminder", downloads: "9M", rating: "5" },
  { id: 3, title: "FLIP - Focus Timer For Study", downloads: "9M", rating: "5" },
  { id: 4, title: "Pomocat - Cute Pomodoro Timer", downloads: "9M", rating: "5" },
  { id: 5, title: "Time Planner: Schedule & Tasks", downloads: "9M", rating: "5" },
  { id: 6, title: "Morning Habits - Daily Routine", downloads: "9M", rating: "5" },
  { id: 7, title: "Focus Plant: Pomodoro Forest", downloads: "9M", rating: "5" },
  { id: 8, title: "Alarmy - Alarm Clock & Sleep", downloads: "9M", rating: "5" },
  { id: 9, title: "Time Planner: Schedule & Tasks", downloads: "9M", rating: "5" },
  { id: 10, title: "Morning Habits - Daily Routine", downloads: "9M", rating: "5" },
  { id: 11, title: "Focus Plant: Pomodoro Forest", downloads: "9M", rating: "5" },
  { id: 12, title: "Alarmy - Alarm Clock & Sleep", downloads: "9M", rating: "5" },
  { id: 13, title: "Time Planner: Schedule & Tasks", downloads: "9M", rating: "5" },
  { id: 14, title: "Morning Habits - Daily Routine", downloads: "9M", rating: "5" },
  { id: 15, title: "Focus Plant: Pomodoro Forest", downloads: "9M", rating: "5" },
  { id: 16, title: "Alarmy - Alarm Clock & Sleep", downloads: "9M", rating: "5" },
  { id: 17, title: "Time Planner: Schedule & Tasks", downloads: "9M", rating: "5" },
  { id: 18, title: "Morning Habits - Daily Routine", downloads: "9M", rating: "5" },
  { id: 19, title: "Focus Plant: Pomodoro Forest", downloads: "9M", rating: "5" },
  { id: 20, title: "Alarmy - Alarm Clock & Sleep", downloads: "9M", rating: "5" },
];

const Apps = () => {
  const [search, setSearch] = useState("");

  const filteredApps = allApps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our All Applications</h1>
        <p className="text-gray-500 text-sm mt-1">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="font-medium text-gray-700 mb-3 md:mb-0">
          ({filteredApps.length}) Apps Found
        </p>
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* App Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all duration-200"
            >
              <div className="w-full h-32 bg-gray-200 rounded-t-2xl"></div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {app.title}
                </h3>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaDownload className="text-green-500" />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{app.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No apps found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Apps;
