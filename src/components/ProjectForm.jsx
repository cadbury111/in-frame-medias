import { useState } from "react";
import "./ProjectForm.css";

const ProjectForm = ({ videoCount = 10 }) => {
  const pricePerVideo = 2500;
  const totalPrice = videoCount * pricePerVideo;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    contentType: "Reels",
    message: "",
    startDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
NEW PROJECT REQUEST

Name: ${formData.name}
Brand / Company: ${formData.company}
Email: ${formData.email}
WhatsApp / Phone: ${formData.phone}

Content Type: ${formData.contentType}
Videos per Month: ${videoCount}
Starting Price: ₹2,500

Preferred Start Date: ${
      formData.startDate || "Not specified"
    }

Project Details:
${formData.message}
    `;

    const whatsappNumber = "919344026620";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section className="project-form" id="contact">

      {/* ================================
          HEADER
      ================================= */}

      <div className="project-form-header">

        <span>
          START A PROJECT
        </span>

        <span>
          07
        </span>

      </div>


      {/* ================================
          INTRO
      ================================= */}

      <div className="project-form-intro">

        <h2>
          Let's create
          <br />
          something <em>worth watching.</em>
        </h2>

        <p>
          Tell us a little about your brand, your goals,
          and the kind of content you want to create.
        </p>

      </div>


      {/* ================================
          FORM + ESTIMATE
      ================================= */}

      <div className="project-form-layout">

        <form onSubmit={handleSubmit}>

          {/* NAME */}

          <div className="form-field">

            <label>
              Your Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

          </div>


          {/* COMPANY */}

          <div className="form-field">

            <label>
              Brand / Company
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your brand name"
              required
            />

          </div>


          {/* EMAIL + PHONE */}

          <div className="form-row">

            <div className="form-field">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

            </div>


            <div className="form-field">

              <label>
                WhatsApp / Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91"
                required
              />

            </div>

          </div>


          {/* CONTENT TYPE + DATE */}

          <div className="form-row">

            <div className="form-field">

              <label>
                Content Type
              </label>

              <select
                name="contentType"
                value={formData.contentType}
                onChange={handleChange}
              >

                <option>
                  Reels
                </option>

                <option>
                  Product Videos
                </option>

                <option>
                  Personal Branding
                </option>

                <option>
                  Brand Storytelling
                </option>

                <option>
                  Social Media Content
                </option>

              </select>

            </div>


            <div className="form-field">

              <label>
                Preferred Start Date
              </label>

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />

            </div>

          </div>


          {/* PROJECT DETAILS */}

          <div className="form-field">

            <label>
              Tell us about your project
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your brand and what you want to create..."
              rows="5"
              required
            />

          </div>


          {/* SUBMIT BUTTON */}

          <button
            type="submit"
            className="submit-project"
          >
            Submit Project Request ↗
          </button>

        </form>


        {/* ================================
            PREMIUM ESTIMATE
        ================================= */}

        <aside className="project-estimate">

          <span className="estimate-label">
            YOUR ESTIMATE
          </span>


          <div className="estimate-videos">
            {videoCount} Videos
          </div>


          <div className="estimate-price">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>


          <p className="estimate-description">
            Estimated monthly investment
          </p>


          <div className="estimate-line">

            <span className="estimate-line-dot left"></span>

            <span className="estimate-line-glow"></span>

            <span className="estimate-line-dot right"></span>

          </div>


          <div className="estimate-starting">

            <span className="estimate-star">
              ✦
            </span>

            <span>
              Starting from{" "}
              <strong>₹2,500</strong>{" "}
              per video
            </span>

          </div>


          <div className="estimate-disclaimer">

            <span className="estimate-info">
              i
            </span>

            <span>
              Final pricing may vary based on your requirements.
            </span>

          </div>

        </aside>

      </div>

    </section>
  );
};

export default ProjectForm;