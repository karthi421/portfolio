import "./HeroSocials.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function HeroSocials() {
  return (
    <div className="hero-socials">
      <a
        href="https://github.com/karthi421"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/karthik-kandelli-9573712b9/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="kandellikarthik7@gmail.com"
        aria-label="Email"
      >
        <HiOutlineMail />
      </a>
    </div>
  );
}