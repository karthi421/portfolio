"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import "./ScrollIndicator.css";

export default function ScrollIndicator() {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="scroll-indicator"
      onClick={scrollToNext}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <div className="mouse">
        <div className="wheel"></div>
      </div>

      <div className="scroll-arrows">
        <FiChevronDown />
        <FiChevronDown />
      </div>
    </motion.div>
  );
}