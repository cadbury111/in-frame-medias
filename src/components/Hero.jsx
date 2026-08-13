import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
    backgroundImage: `
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.82) 0%,
      rgba(0, 0, 0, 0.55) 45%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    url('/images/hero.jpg')
  `
}}
    >

      <div className="hero-content">

        <p className="hero-label">
          CREATIVE CONTENT STUDIO
        </p>

        <h1>
          Your Story.
          <br />
          <span>In Motion.</span>
        </h1>

        <p className="hero-description">
          Content that feels human, looks premium,
          and makes your brand impossible to ignore.
        </p>

        <div className="hero-actions">

          <a href="#work" className="primary-button">
            View Our Work
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-button">
            Start a Project
          </a>

        </div>

      </div>

      <div className="hero-bottom">

        <span>IN FRAME MEDIAS</span>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </div>

      </div>

    </section>
  );
}

export default Hero;