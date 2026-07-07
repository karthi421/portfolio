"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./ProjectScroller.css";

export default function ProjectScroller({
  projects,
  currentIndex,
}) {
  return (
    <div className="project-scroller">

      <AnimatePresence mode="wait">

        <motion.div
          key={projects[currentIndex].id}
          className="project-slide"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -40,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <ProjectCard
            project={projects[currentIndex]}
          />
        </motion.div>

      </AnimatePresence>

      <div className="project-indicators">

        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={`indicator ${
              index === currentIndex ? "active" : ""
            }`}
            aria-label={`Project ${index + 1}`}
          />
        ))}

      </div>

    </div>
  );
}