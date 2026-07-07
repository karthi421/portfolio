"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const navItems = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Projects",
    id: "projects",
  },
  
  {
    name: "Skills",
    id: "skills",
  },
  
  {
    name: "About",
    id: "about",
  },
  {
  name: "Resume",
  id: "resume",
   href: "/Karthik_Resume.pdf"
},
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(navItems[index].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item) => {

  // Resume
  if (item.href) {
    window.open(item.href, "_blank");
    return;
  }

  // Other sections
  const section = document.getElementById(item.id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>

      {/* Logo */}

      <div className="navbar-logo">
        <span className="logo-k">K</span>

        <span className="logo-text">
          KARTHIK
        </span>
      </div>

      {/* Navigation */}

      <nav className="navbar-container">

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item)}
            className={`nav-link ${
              active === item.id ? "active" : ""
            }`}
          >
            {active === item.id && (
  <>
    <motion.div
      layoutId="active-pill"
      className="active-pill"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    />

    <motion.span
      layoutId="active-dot"
      className="active-dot"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    />
  </>
)}

           <span className="nav-text">
  {item.name}
</span>

          </button>
        ))}

        

      </nav>

      {/* Right Button */}

      <button className="talk-button">
        <span>Let's Talk</span>

        <span className="talk-dot"></span>
      </button>

    </header>
  );
}