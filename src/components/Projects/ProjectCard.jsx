"use client";

import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    features,
    stack,
    image,
    github,
    demo,
  } = project;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      {/* Left Side */}
      <div className="project-left">
        <motion.a
          href={demo || github}
          target="_blank"
          rel="noopener noreferrer"
          className="browser-frame"
          whileHover={{
            rotateX: 5,
            rotateY: -5,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 18,
          }}
        >
          <div className="browser-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>

            <div className="browser-address">
              {demo || github}
            </div>
          </div>

          <img
            src={image}
            alt={title}
            className="project-image"
            draggable={false}
          />
        </motion.a>
      </div>

      {/* Right Side */}
      <div className="project-right">

        <h2>{title}</h2>

        <p className="project-description">
          {description}
        </p>

        <div className="project-section">
          <h4>Features</h4>

          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-section">
          <h4>Tech Stack</h4>

          <div className="tech-stack">
            {stack.map((tech) => {
  const Icon = tech.icon;

  return (
    <div
      key={tech.name}
      className="tech-chip"
    >
      <Icon
  className="tech-icon"
  color={tech.color}
/>
      <span>{tech.name}</span>
    </div>
  );
})}
          </div>
        </div>

        <div className="project-links">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
}