import Reveal from "./Reveal";
import Section from "./Section";
import { motion } from "motion/react";
export default function Skills() {
  const mySkills = [
    {
      name: "HTML",
      percent: 95,
      color: "bg-orange-500",
    },
    {
      name: "CSS",
      percent: 90,
      color: "bg-blue-500",
    },
    {
      name: "JavaScript",
      percent: 90,
      color: "bg-yellow-500",
    },
    {
      name: "React.js",
      percent: 85,
      color: "bg-red-500",
    },
    {
      name: "Tailwind CSS",
      percent: 90,
      color: "bg-teal-500",
    },
    {
      name: "Bootstrap",
      percent: 80,
      color: "bg-indigo-500",
    },
    {
      name: "Responsive Design",
      percent: 95,
      color: "bg-green-500",
    },
    {
      name: "Git & GitHub",
      percent: 85,
      color: "bg-purple-500",
    },
  ];
  return (
    <Section id={"skills"} title={"Skills & Technologies"} type={"secSection"}>
      <motion.div className="grid md:grid-cols-2 gap-6 pt-12">
        {mySkills.map((skill) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="dark:bg-slate-900 p-6 bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg"
          >
            <div className="flex justify-between mb-2 items-center">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {skill.percent}%
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-slate-700 overflow-hidden h-3 w-full rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.percent + "%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className={`h-full ${skill.color} rounded-full`}
                // style={{
                //   width: skill.percent + "%",
                // }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
