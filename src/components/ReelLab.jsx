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

  /* =========================================
     OPEN COURSE LIST
  ========================================= */

  const handleEnterCourse = () => {
    setShowCourses(true);

    setTimeout(() => {
      document
        .getElementById("reellab-course-list")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };


  /* =========================================
     WHATSAPP ENROLLMENT
  ========================================= */

  const handleEnroll = (course) => {
    const message = `Hi, I'm interested in the REELLAB course.

Course: ${course.title}
Course Price: ₹3,000

I would like to enroll in this course.`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  };


  /* =========================================
     BACK TO REELLAB
  ========================================= */

  const handleBack = () => {
    setShowCourses(false);

    setTimeout(() => {
      document
        .getElementById("courses")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };


  return (
    <section className="reellab" id="courses">

      {/* ==================================================
          FRONT / HERO SECTION
      ================================================== */}

      {!showCourses && (
        <>

          {/* HEADER */}

          <div className="reellab-header">

            <span className="reellab-label">
              LEARN • CREATE • GROW
            </span>

            <span className="reellab-number">
              06
            </span>

          </div>


          {/* HERO CONTENT */}

          <div className="reellab-content">

            {/* LEFT */}

            <div className="reellab-title">

              <h2>
                REEL
                <br />
                <em>LAB.</em>
              </h2>

            </div>


            {/* RIGHT */}

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


              {/* FEATURES */}

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


              {/* ENTER COURSE */}

              <div className="reellab-bottom">

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


      {/* ==================================================
          COURSE PAGE
      ================================================== */}

      {showCourses && (

        <div className="reellab-courses-page">

          {/* TOP BAR */}

          <div className="reellab-courses-top">

            <button
              type="button"
              className="reellab-back"
              onClick={handleBack}
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


          {/* COURSE INTRO */}

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


          {/* ==================================================
              THREE COURSES
          ================================================== */}

          <div
            className="reellab-course-list"
            id="reellab-course-list"
          >

            {courses.map((course) => (

              <article
                className="reellab-course-card"
                key={course.id}
              >

                {/* COURSE TOP */}

                <div className="reellab-course-top">

                  <span className="reellab-course-id">
                    {course.id}
                  </span>

                  <span className="reellab-course-type">
                    REELLAB COURSE
                  </span>

                </div>


                {/* COURSE BODY */}

                <div className="reellab-course-body">

                  {/* LEFT SIDE */}

                  <div className="reellab-course-info">

                    <h3>
                      {course.title}
                    </h3>

                    <p>
                      {course.description}
                    </p>

                  </div>


                  {/* RIGHT SIDE — TOPICS */}

                  <div className="reellab-course-learning">

                    <span className="reellab-learning-title">
                      WHAT YOU'LL LEARN
                    </span>


                    <div className="reellab-topic-list">

                      {course.topics.map(
                        (topic, index) => (

                          <div
                            className="reellab-topic"
                            key={topic}
                          >

                            <span>
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <p>
                              {topic}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                </div>


                {/* ==================================================
                    COURSE PRICE + ENROLL BUTTON
                ================================================== */}

                <div className="reellab-course-bottom">

                  {/* PRICE */}

                  <div className="reellab-course-fee">

                    <small>
                      COURSE FEE
                    </small>

                    <strong>
                      ₹3,000
                    </strong>

                  </div>


                  {/* ENROLL */}

                  <button
                    type="button"
                    className="reellab-course-enroll"
                    onClick={() =>
                      handleEnroll(course)
                    }
                  >
                    ENROLL NOW ↗
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