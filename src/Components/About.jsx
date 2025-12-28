import React from "react";
import myImage from "../assets/ahmed_morad.jpg";

export default function About() {
  const stats = [
    {
      num: 1,
      text: "Year Experience",
    },
    {
      num: 10,
      text: "Projects Completed",
    },
    {
      num: 3,
      text: "Happy Clients",
    },
  ];
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 font-bold text-gray-800 text-4xl md:text-5xl dark:text-white">
            About Me
          </h2>
        </div>
        <div className="gap-12 grid items-center md:grid-cols-2">
          <div className="image flex items-center justify-center">
            <div className="h-90 w-90 rounded-full overflow-hidden">
              <img
                src={myImage}
                className="scale-125 object-center"
                alt="Ahmed Morad"
              />
            </div>
          </div>
          <div className="description flex-1">
            <div className="text-lg text-gray-700 mb-8 leading-relaxed dark:text-gray-300">
              I'm a passionate Frontend Developer specializing in React.js with
              a keen eye for creating clean, efficient, and user-centric
              interfaces. I focus on writing maintainable code, optimizing
              performance, and delivering real-world solutions that make a
              difference. My goal is to craft digital experiences that are not
              only visually appealing but also highly functional and accessible.
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.text}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg text-center p-4"
                >
                  <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-1 text-3xl">
                    + {stat.num}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:whitespace-nowrap">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
