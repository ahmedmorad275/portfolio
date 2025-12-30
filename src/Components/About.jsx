import Section from "./Section";
import myImage from "../assets/ahmed_morad.jpg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  const stats = [
    {
      num: 1,
      text: "years",
    },
    {
      num: 10,
      text: "projects",
    },
    {
      num: 3,
      text: "clients",
    },
  ];
  return (
    <Section id="about" type={"primarySection"} title={t(`about.title`)}>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center pt-12"
        >
          <div className="h-72 w-72 overflow-hidden rounded-full">
            <img
              src={myImage}
              className="scale-125 object-center"
              alt="Ahmed Morad"
            />
          </div>
        </motion.div>
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {t(`about.des`)}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.text}
                className="rounded-lg bg-gray-50 p-4 text-center dark:bg-slate-800"
              >
                <h3 className="mb-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                  + {stat.num}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 sm:whitespace-nowrap">
                  {t(`about.${stat.text}`)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
