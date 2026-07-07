"use client";

import { motion } from "framer-motion";

import "./SkillBadge.css";

export default function SkillBadge({ technology }) {
  const Icon = technology.icon;

  return (
    <motion.div
      className="skill-badge"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -6,
        scale: 1.04,
      }}
    >
      <Icon
        className="skill-icon"
        style={{
          color: technology.color,
        }}
      />

      <span>{technology.name}</span>
    </motion.div>
  );
}