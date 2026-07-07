import "./HeroContent.css";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="hero-content">

      <h1 className="hero-title">

        <div className="title-line">

          <span className="title-white">
            I Craft
          </span>

          <span className="title-gradient">
            Digital Solutions
          </span>

        </div>

        <div className="title-line">

          <span className="title-white">
            That Drive
          </span>

          <span className="title-italic">
            Real Impact
          </span>

        </div>

      </h1>

      <p className="hero-description">
        Building fast, scalable, and intelligent web applications
        <br />
        with a focus on performance, user experience, and simplicity.
      </p>

     <button className="hero-button">

    <span className="button-dot"></span>

    <span className="button-text">
        Explore My Work
    </span>

    <ArrowRight
        className="button-arrow"
        size={22}
        strokeWidth={1.8}
    />

</button>

    </div>
  );
}