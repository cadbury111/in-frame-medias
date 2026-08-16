
import { useState } from "react";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "Client Work 01",
      category: "PERSONAL BRAND",
      image: "/images/client-01.jpg",
      video: "/videos/client-01.mp4",
    },
    {
      id: "02",
      title: "Client Work 02",
      category: "REELS",
      image: "/images/client-02.jpg",
      video: "/videos/client-02.mp4",
    },
    {
      id: "03",
      title: "Client Work 03",
      category: "REELS",
      image: "/images/client-03.jpg",
      video: "/videos/client-03.mp4",
    },
    {
      id: "04",
      title: "Client Work 04",
      category: "BRAND",
      image: "/images/client-04.jpg",
      video: "/videos/client-04.mp4",
    },
  ];

  const openVideo = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="portfolio" id="work">

      {/* HEADER */}
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


      {/* FILTERS */}
      <div className="portfolio-filters">

        <button className="filter active" type="button">
          ALL
        </button>

        <button className="filter" type="button">
          REELS
        </button>

        <button className="filter" type="button">
          BRAND
        </button>

        <button className="filter" type="button">
          PRODUCT
        </button>

        <button className="filter" type="button">
          PERSONAL BRAND
        </button>

      </div>


      {/* PORTFOLIO GRID */}
      <div className="portfolio-grid">

        {projects.map((project) => (

          <article
            className="portfolio-card"
            key={project.id}
          >

            <div
              className="portfolio-link"
              onClick={() => openVideo(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  openVideo(project);
                }
              }}
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

                <h3>
                  {project.title}
                </h3>

                <div className="portfolio-meta">

                  <span>
                    {project.category}
                  </span>

                  <span className="portfolio-view">
                    VIEW PROJECT ↗
                  </span>

                </div>

              </div>

            </div>

          </article>

        ))}

      </div>


      {/* =====================================
          VIDEO MODAL
          INLINE STYLES = NO CSS CONFLICT
      ====================================== */}

      {selectedProject && (

        <div
          onClick={closeVideo}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.78)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >

          {/* VIDEO BOX */}

          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "360px",
              maxWidth: "88vw",
              maxHeight: "88vh",
              background: "#050505",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 30px 100px rgba(0,0,0,0.9)",
            }}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeVideo}
              aria-label="Close video"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 10,

                width: "38px",
                height: "38px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "50%",

                background: "rgba(0,0,0,0.75)",
                color: "#ffffff",

                fontSize: "26px",
                lineHeight: 1,

                cursor: "pointer",
              }}
            >
              ×
            </button>


            {/* VIDEO */}

            <video
              src={selectedProject.video}
              controls
              autoPlay
              playsInline
              preload="metadata"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: "76vh",
                objectFit: "contain",
                background: "#000",
              }}
            />


            {/* VIDEO INFO */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                padding: "14px 17px",

                background: "#080808",
                color: "#ffffff",
              }}
            >

              <div>

                <h3
                  style={{
                    margin: "0 0 5px",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {selectedProject.title}
                </h3>

                <span
                  style={{
                    color: "#777777",
                    fontSize: "9px",
                    letterSpacing: "1.5px",
                  }}
                >
                  {selectedProject.category}
                </span>

              </div>

              <span
                style={{
                  color: "#777777",
                  fontSize: "11px",
                }}
              >
                {selectedProject.id}
              </span>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Portfolio;