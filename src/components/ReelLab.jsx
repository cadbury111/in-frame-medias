import { useState } from "react";
import "./ReelLab.css";

function ReelLab() {
  const [showCourses, setShowCourses] = useState(false);

  const whatsappNumber = "919344026620";

  const courses = [
    {
      id: "01",
      title: "VIDEO EDITING",
      description:
        "Learn to create engaging social media videos from scratch.",
      topics: [
        "Introduction to video editing",
        "Editing app & interface",
        "Importing and organising footage",
        "Cutting & trimming",
        "Text & captions",
        "Transitions",
        "Music & sound effects",
        "B-roll & overlays",
        "Colour adjustment",
        "Reel editing",
        "Export settings",
        "Practical editing project",
      ],
    },

    {
      id: "02",
      title: "SOCIAL MEDIA MANAGEMENT",
      description:
        "Learn to manage and build a consistent social media presence.",
      topics: [
        "Introduction to SMM",
        "Personal branding fundamentals",
        "Profile optimisation",
        "Understanding your audience",
        "Content pillars",
        "Content ideas",
        "Content planning",
        "Posting & scheduling",
        "Engagement",
        "Hashtags & keywords",
        "Understanding insights",
        "7-day content plan",
      ],
    },

    {
      id: "03",
      title: "CONTENT WRITING FOR PERSONAL BRANDING",
      description:
        "Learn to create content that communicates your ideas and builds your personal brand.",
      topics: [
        "Content writing fundamentals",
        "Finding your brand voice",
        "Understanding your audience",
        "Content pillars",
        "Writing strong hooks",
        "Captions",
        "Storytelling",
        "Reel scripts",
        "CTAs",
        "Content repurposing",
        "AI-assisted content creation",
        "5-piece content project",
      ],
    },
  ];

  const handleEnroll = (course) => {
    const message = `Hi, I'm interested in the REELLAB course.

Course: ${course.title}
Course Price: ₹3,000

I would like to enroll in this course.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleEnterCourse = () => {
    setShowCourses(true);

    setTimeout(() => {
      document
        .getElementById("reellab-courses")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <section className="reellab" id="courses">

      {/* =====================================
          MAIN REELLAB HERO
      ===================================== */}

      {!showCourses && (
        <>
          <div className="reellab-header">

            <span className="reellab-label">
              LEARN • CREATE • GROW
            </span>

            <span className="reellab-number">
              06
            </span>

          </div>


          <div className="reellab-content">

            {/* LEFT — REEL LAB */}

            <div className="reellab-title">

              <h2>
                REEL
                <br />
                <em>LAB.</em>
              </h2>

            </div>


            {/* RIGHT — COURSE INTRO */}

            <div className="reellab-details">

              <span className="reellab-course-label">
                BEGINNER TO CREATOR
              </span>

              <h3>
                Learn. Edit. Create.
              </h3>

              <p>
                Learn practical digital skills from scratch
                and start creating content that people want
                to watch, manage, and engage with.
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
                    ₹3,000
                  </strong>

                </div>


                <button
                  type="button"
                  className="reellab-enroll"
                  onClick={handleEnterCourse}
                >
                  ENTER COURSE ↗
                </button>

              </div>

            </div>

          </div>
        </>
      )}


      {/* =====================================
          COURSES SECTION
      ===================================== */}

      {showCourses && (
        <div
          className="reellab-courses-page"
          id="reellab-courses"
        >

          <div className="reellab-courses-top">

            <button
              type="button"
              className="reellab-back"
              onClick={() => {
                setShowCourses(false);

                window.scrollTo({
                  top: document.getElementById("courses")?.offsetTop || 0,
                  behavior: "smooth",
                });
              }}
            >
              ← BACK
            </button>

            <span>
              REELLAB COURSES
            </span>

            <span>
              03 COURSES
            </span>

          </div>


          <div className="reellab-courses-intro">

            <span>
              BEGINNER TO CREATOR
            </span>

            <h2>
              Choose your
              <br />
              <em>course.</em>
            </h2>

            <p>
              Learn practical skills, build real projects,
              and create with confidence.
            </p>

          </div>


          <div className="reellab-course-list">

            {courses.map((course) => (

              <article
                className="reellab-course-card"
                key={course.id}
              >

                {/* COURSE NUMBER */}

                <div className="reellab-course-top">

                  <span className="reellab-course-id">
                    {course.id}
                  </span>

                  <span className="reellab-course-type">
                    REELLAB COURSE
                  </span>

                </div>


                {/* COURSE INFORMATION */}

                <div className="reellab-course-body">

                  <div className="reellab-course-info">

                    <h3>
                      {course.title}
                    </h3>

                    <p>
                      {course.description}
                    </p>

                  </div>


                  {/* TOPICS */}

                  <div className="reellab-course-learning">

                    <span className="reellab-learning-title">
                      WHAT YOU'LL LEARN
                    </span>

                    <div className="reellab-topic-list">

                      {course.topics.map((topic, index) => (

                        <div
                          className="reellab-topic"
                          key={topic}
                        >

                          <span>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p>
                            {topic}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>


                {/* PRICE + ENROLL */}

                <div className="reellab-bottom">

  <button
    type="button"
    className="reellab-enroll"
    onClick={handleEnterCourse}
  >
    ENTER COURSE ↗
  </button>

</div>

              </article>

            ))}

          </div>

        </div>
      )}

    </section>
  );
}

export default ReelLab;