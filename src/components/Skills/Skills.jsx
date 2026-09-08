"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import "./Skills.css";

import SkillBadge from "./SkillBadge";
import { technologies } from "../../Constants/technologies";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* Small Label */}

      <motion.div
        className="skills-chip"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        TECHNOLOGIES
      </motion.div>

      {/* Heading + Artwork */}

      <div className="skills-hero">

        {/* Artwork Behind */}

        <motion.div
          className="skills-artwork"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/skills/cube.png"
            alt="Technology Artwork"
            width={100000000}
            height={10000000}
            priority
            className="skills-object"
          />
        </motion.div>

        {/* Heading */}

        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
       

            Development Stack
        </motion.h2>

      </div>

      {/* Subtitle */}

      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        Building intelligent software with modern technologies,
        scalable architectures and AI-driven solutions.
      </motion.p>

      {/* Technology Badges */}

      <motion.div
        className="skills-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        {technologies.map((technology) => (
          <SkillBadge
            key={technology.name}
            technology={technology}
          />
        ))}
      </motion.div>

    </section>
  );
}