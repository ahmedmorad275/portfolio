import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-lg mb-2">Hi, I'm</p>
        <h1 className="text-7xl text-white font-bold mb-4">Ahmed Morad</h1>
        <h2 className="font-semibold text-3xl text-blue-400 mb-6">
          Frontend Developer | React.js
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Building beautiful, performant, and user-friendly web applications
        </p>
        <div className="buttons space-x-4.5">
          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg transition-colors duration-300 cursor-pointer hover:bg-blue-700">
            View Projects
          </button>
          <button className="border-2 border-blue-600 px-3 py-1 rounded-lg">Download CV</button>
        </div>
      </div>
    </section>
  );
}
