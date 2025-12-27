import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              Hi, I'm
            </p>
            <h1 className="md:text-7xl text-5xl dark:text-white text-gray-800 font-bold mb-4">
              Ahmed Morad
            </h1>
            <h2 className="font-semibold text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">
              Frontend Developer | React.js
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Building beautiful, performant, and user-friendly web applications
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="cursor-pointer px-7 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
              View Projects
            </button>
            <button className="cursor-pointer px-7 py-2 dark:bg-slate-800 bg-slate-50 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 flex items-center gap-2">
              <MdOutlineFileDownload size="20px" />
              Download CV
            </button>
          </div>
          <div className="arrowDown flex justify-center mt-16 text-2xl">
            <button className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
              <FaArrowDown />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
