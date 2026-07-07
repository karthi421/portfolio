"use client";

import "./ScrollIndicator.css";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {

  const handleScroll = () => {
    const nextSection = document.getElementById("skills");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className="scroll-indicator"
      onClick={handleScroll}
      aria-label="Scroll Down"
    >
      <div className="mouse">
        <div className="wheel"></div>
      </div>

      <span className="scroll-text">
        SCROLL DOWN
      </span>

      <ChevronDown className="scroll-arrow" size={14} />
    </button>
  );
}