import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "motion/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      disabled={!isVisible}
      className="fixed right-8 bottom-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={18} />
    </motion.button>
  );
}
