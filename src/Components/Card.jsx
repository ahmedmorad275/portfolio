import { HiOutlineExternalLink } from "react-icons/hi";
import { RiGithubLine } from "react-icons/ri";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
export default function Card({
  imageSrc,
  name,
  description,
  techs = [],
  liveLink,
  srcLink,
  index,
}) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: "easeInOut" }}
      className="group flex flex-col overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-slate-800"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={imageSrc}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5 text-left">
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
            {name}
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, index) => (
              <p
                key={index}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            target="_blank"
            href={liveLink}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
          >
            <HiOutlineExternalLink />
            {t("projects.live")}
          </a>
          <a
            target="_blank"
            href={srcLink}
            className="flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800"
          >
            <RiGithubLine />
            {t("projects.github")}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
