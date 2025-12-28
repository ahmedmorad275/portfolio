import Section from "./Section";
import myImage from "../assets/ahmed_morad.jpg";
import { motion } from "motion/react";
import Reveal from "./Reveal";
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
    <Reveal>
      <Section id="about" type={"primarySection"} title={"About Me"}>
        <div className="gap-12 grid items-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="image flex items-center justify-center pt-12"
          >
            <div className="h-90 w-90 rounded-full overflow-hidden">
              <img
                src={myImage}
                className="scale-125 object-center"
                alt="Ahmed Morad"
              />
            </div>
          </motion.div>
          <div className="description flex-1">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-8 leading-relaxed dark:text-gray-300"
            >
              I'm a passionate Frontend Developer specializing in React.js with
              a keen eye for creating clean, efficient, and user-centric
              interfaces. I focus on writing maintainable code, optimizing
              performance, and delivering real-world solutions that make a
              difference. My goal is to craft digital experiences that are not
              only visually appealing but also highly functional and accessible.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
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
            </motion.div>
          </div>
        </div>
      </Section>
    </Reveal>
  );
}
