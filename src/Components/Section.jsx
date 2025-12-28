import { motion } from "motion/react";

export default function Section({ id, title, children, type }) {
  return (
    <section id={id} className={`px-4 py-20 ${type}`}>
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl dark:text-white"
          >
            {title}
          </motion.h2>
        </div>

        {children}
      </div>
    </section>
  );
}
