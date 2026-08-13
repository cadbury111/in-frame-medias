function Portfolio() {
  const projects = [
    {
      id: "01",
      title: "Client Work 01",
      category: "REELS",
      image: "/images/client-01.jpg",
      link: "https://www.instagram.com/reel/DTcqb0Ak5tf/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    },
    {
      id: "02",
      title: "Client Work 02",
      category: "REELS",
      image: "/images/client-02.jpg",
      link: "https://www.instagram.com/reel/DVc5MdnkUw8/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    },
    {
      id: "03",
      title: "Client Work 03",
      category: "PERSONAL BRAND",
      image: "/images/client-03.jpg",
      link: "https://www.instagram.com/reel/DV0uPbRASHF/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    },
    {
      id: "04",
      title: "Client Work 04",
      category: "BRAND",
      image: "/images/client-04.jpg",
      link: "https://www.instagram.com/reel/DTaPLnYk9DQ/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    },
  ];

  return (
    <section className="portfolio" id="work">

      <div className="portfolio-header">

        <div className="section-label">
          SELECTED WORK
        </div>

        <div className="portfolio-title-row">

          <h2>
            Stories we've
            <br />
            <em>brought to life.</em>
          </h2>

          <p>
            A selection of content created for brands,
            creators, and businesses looking to make
            an impact.
          </p>

        </div>

      </div>

      <div className="portfolio-filters">
        <button className="filter active">ALL</button>
        <button className="filter">REELS</button>
        <button className="filter">BRAND</button>
        <button className="filter">PRODUCT</button>
        <button className="filter">PERSONAL BRAND</button>
      </div>

      <div className="portfolio-grid">

        {projects.map((project) => (
          <article
            className="portfolio-card"
            key={project.id}
          >

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >

              <div className="portfolio-media">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="portfolio-overlay">

                  <span className="project-number">
                    {project.id}
                  </span>

                  <span className="project-arrow">
                    ↗
                  </span>

                </div>

              </div>

              <div className="portfolio-info">
                 <h3>{project.title}</h3>

                <div>
                  <span className="portfolio-category">
                    {project.category}
                  </span>
                </div>

                <span className="portfolio-view">
                  VIEW PROJECT ↗
                </span>

              </div>

            </a>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Portfolio;