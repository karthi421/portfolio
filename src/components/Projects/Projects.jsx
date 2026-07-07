"use client";

import { useEffect, useRef, useState } from "react";
import ProjectScroller from "./ProjectScroller";
import projects from "../../constants/projects";
import "./Projects.css";

export default function Projects() {
  console.log("Projects Mounted");
  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const isAnimating = useRef(false);
  const isSectionActive = useRef(false);
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isSectionActive.current = entry.isIntersecting;
    },
    {
      threshold: 0.6,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleWheel = (e) => {
      
      if (!isSectionActive.current) return;
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }
      console.log(projects);
console.log(projects.length);

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      /* ---------- DOWN ---------- */

      if (scrollingDown) {
        if (currentIndex < projects.length - 1) {
          e.preventDefault();

          isAnimating.current = true;

          setCurrentIndex((prev) => prev + 1);

          setTimeout(() => {
            isAnimating.current = false;
          }, 500);

          return;
        }

        // Last project → allow page scroll naturally.
        return;
      }

      /* ---------- UP ---------- */

      if (scrollingUp) {
        if (currentIndex > 0) {
          e.preventDefault();

          isAnimating.current = true;

          setCurrentIndex((prev) => prev - 1);

          setTimeout(() => {
            isAnimating.current = false;
          }, 500);

          return;
        }

        // First project → allow page scroll naturally.
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  return (
    <section id="projects"
      ref={sectionRef}
      className="projects-section"
    >
      <div className="projects-heading">
        

        <h1>My Projects</h1>
      </div>

      <ProjectScroller
        projects={projects}
        currentIndex={currentIndex}
      />
    </section>
  );
}