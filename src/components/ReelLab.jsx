import "./ReelLab.css";
 function ReelLab(){ 
  const handleEnroll = () => {
    const whatsappNumber = "919344026620";

    const message = `Hi, I'm interested in the REELLAB — Beginner to Creator course.

I would like to enroll in the course.

Course Price: ₹2,500`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="reellab" id="courses">

      <div className="reellab-header">

        <span className="reellab-label">
          LEARN • CREATE • GROW
        </span>

        <span className="reellab-number">
          06
        </span>

      </div>


      <div className="reellab-content">

        <div className="reellab-title">

          <h2>
            REEL
            <br />
            <em>LAB.</em>
          </h2>

        </div>


        <div className="reellab-details">

          <span className="reellab-course-label">
            BEGINNER TO CREATOR
          </span>

          <h3>
            Learn. Edit. Create.
          </h3>

          <p>
            Learn the fundamentals of professional Reels
            editing from scratch and start creating content
            that people want to watch.
          </p>


          <div className="reellab-features">

            <span>
              Beginner Friendly
            </span>

            <span>
              Practical Learning
            </span>

            <span>
              Project Based
            </span>

          </div>


          <div className="reellab-bottom">

            <div className="reellab-price">

              <small>
                COURSE FEE
              </small>

              <strong>
                ₹2,500
              </strong>

            </div>


            <button
              type="button"
              className="reellab-enroll"
              onClick={handleEnroll}
            >
              ENROLL NOW ↗
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ReelLab;