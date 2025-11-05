import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import { Link } from "react-router";

const apps = [
  { id: 1, title: "Forest: Focus For Productivity",img:"/src/assets/demo-app (2).webp", downloads: "9M", rating: "5" },
  { id: 2, title: "SmPlan: ToDo List With Reminder", img:"/src/assets/reminder.png",  downloads: "9M", rating: "5" },
  { id: 3, title: "FLIP - Focus Timer For Study", img:"/src/assets/study.png",  downloads: "9M", rating: "5" },
  { id: 4, title: "Pomocat - Cute Pomodoro Timer", img:"/src/assets/demo-app (1).webp", downloads: "9M", rating: "5" },
  { id: 5, title: "Time Planner: Schedule & Tasks", img:"/src/assets/Planer.png", downloads: "9M", rating: "5" },
  { id: 6, title: "Morning Habits - Daily Routine", img:"/src/assets/Moring.png", downloads: "9M", rating: "5" },
  { id: 7, title: "Focus Plant: Pomodoro Forest", img:"/src/assets/demo-app (2).webp", downloads: "9M", rating: "5" },
  { id: 8, title: "Alarmy - Alarm Clock & Sleep", img:"/src/assets/reminder.png", downloads: "9M", rating: "5" },
];

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trending Apps</h2>
        <p className="text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {apps.map((app) => (
          <Link key={app.id} to={`/apps/${app.id}`}>
            <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4 cursor-pointer hover:scale-105 duration-300">
              {/* ✅ Proper Image */}
              <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={app.img}
                  alt={app.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-gray-800 font-semibold text-sm mb-3">{app.title}</h3>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1 text-green-600 font-medium">
                  <FaDownload />
                  <span>{app.downloads}</span>
                </div>
                <div className="flex items-center gap-1 text-orange-500 font-medium">
                  <FaStar />
                  <span>{app.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;