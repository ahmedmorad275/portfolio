import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="px-4 pt-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-lg text-gray-600 dark:text-gray-400">
              Hi, I'm
            </p>
            <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-7xl dark:text-white">
              Ahmed Morad
            </h1>
            <h2 className="mb-6 text-2xl font-semibold text-blue-600 md:text-3xl dark:text-blue-400">
              Frontend Developer | React.js
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Building beautiful, performant, and user-friendly web applications
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="cursor-pointer rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl"
              >
                View Projects
              </a>
              <a
                href="../../public/Ahmed_Morad_Resume.pdf"
                download
                className="flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-slate-50 px-6 py-2 font-medium text-blue-600 transition-colors duration-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-blue-400 dark:hover:bg-slate-700"
              >
                <MdOutlineFileDownload size="20px" />
                Download CV
              </a>
            </div>
            <div className="arrowDown mt-16 flex justify-center text-2xl">
              <button className="cursor-pointer text-gray-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                <a href="#about">
                  <FaArrowDown />
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
