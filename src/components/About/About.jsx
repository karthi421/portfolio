"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Left Side */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-tag">
            KNOW ABOUT ME
          </span>

          <h2 className="about-title">
            Full-Stack Developer and
            <br />
            a little bit of <span>everything</span>
          </h2>

          <p>
            I'm <strong>Kandelli Karthik</strong>, a passionate
            Full-Stack Developer who enjoys building modern,
            scalable web applications and AI-powered solutions.
            I love turning ideas into clean, efficient, and
            user-friendly digital experiences.
          </p>

          <p>
            My expertise spans React, Next.js, Node.js,
            Python, Java, SAP ABAP, PostgreSQL, and cloud
            technologies. I'm always eager to learn,
            solve challenging problems, and build products
            that create real value.
          </p>

          <p>
            Beyond coding, I enjoy exploring new technologies,
            strengthening my problem-solving skills, and
            continuously improving as a developer.
          </p>

          <div className="about-socials">

            <a
              href="https://www.linkedin.com/in/karthik-kandelli-9573712b9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/karthi421"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/YOUR-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about/profile.png"
            alt="Kandelli Karthik"
          />
        </motion.div>

      </div>
    </section>
  );
}