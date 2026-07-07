"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import "./SocialLinks.css";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/yourusername",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:your@email.com",
  },
];

export default function SocialLinks({
  size = "medium",
  direction = "row",
}) {
  return (
    <div
      className={`social-links ${direction} ${size}`}
    >
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}