import "./Hero.css";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";
import HeroBadge from "./HeroBadge";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <HeroBackground />

      <div className="hero-layout">

        {/* Badge */}
        <div className="hero-badge-wrapper">
          <HeroBadge />
        </div>

        {/* Main Content */}
        <div className="hero-content-wrapper">
          <HeroContent />
        </div>

        {/* Social Icons */}
        <div className="hero-social-wrapper">
          <HeroSocials />
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-wrapper">
          <ScrollIndicator />
        </div>

        {/* Stats */}
        <div className="hero-stats-wrapper">
          <HeroStats />
        </div>

      </div>
    </section>
  );
}