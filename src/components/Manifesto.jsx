const Manifesto = () => {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto-top">
        <span className="manifesto-label">OUR PHILOSOPHY</span>
        <span className="manifesto-number">05</span>
      </div>

      <div className="manifesto-content">
        <h2>
          We don't make
          <br />
          <em>content</em> for the sake
          <br />
          of content.
        </h2>

        <div className="manifesto-text">
          <p>
            Your brand doesn't need to look like everyone else.
          </p>

          <p>
            We believe the best content comes from real people,
            real moments, and stories that feel human.
          </p>

          <p>
            From the first idea to the final frame, we create
            content that feels natural, looks premium, and gives
            your brand its own identity.
          </p>
        </div>
      </div>

      <div className="manifesto-bottom">
        <span>TRUE COLOURS</span>
        <span>IN FRAME MEDIAS ↗</span>
      </div>
    </section>
  );
};

export default Manifesto;