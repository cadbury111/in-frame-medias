function Services() {
  const services = [
    {
      number: "01",
      title: "SCRIPTING",
      description:
        "Hook-driven storytelling that gives every piece of content a reason to be watched.",
    },
    {
      number: "02",
      title: "SHOOTING & DIRECTION",
      description:
        "Natural direction and thoughtful framing that brings out the personality behind your brand.",
    },
    {
      number: "03",
      title: "HIGH-RETENTION EDITING",
      description:
        "Clean, purposeful editing that cuts the fluff and keeps your audience watching.",
    },
    {
      number: "04",
      title: "CONTENT MANAGEMENT",
      description:
        "Strategic planning and publishing that keeps your content consistent and your brand visible.",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-intro">

        <div className="section-label">
          WHAT WE DO
        </div>

        <div className="services-heading">
          <h2>
            We turn ideas
            <br />
            <em>into content</em>
            <br />
            that moves.
          </h2>

          <p>
            From the first idea to the final frame, we create content
            designed to feel human, look premium, and connect with people.
          </p>
        </div>

      </div>

      <div className="services-list">

        {services.map((service) => (
          <div className="service-item" key={service.number}>

            <span className="service-number">
              {service.number}
            </span>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

            <span className="service-arrow">
              ↗
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;