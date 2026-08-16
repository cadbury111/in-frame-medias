import { useState } from "react";

const Packages = ({ onRequest }) => {
  const pricePerVideo = 1500;

  const [videoCount, setVideoCount] = useState(10);

  const totalPrice = videoCount * pricePerVideo;

  const increaseVideos = () => {
    setVideoCount((current) => current + 1);
  };

  const decreaseVideos = () => {
    setVideoCount((current) => {
      if (current <= 1) return 1;
      return current - 1;
    });
  };

  return (
    <section className="packages" id="packages">

      <div className="packages-header">
        <span>PACKAGES</span>
        <span>06</span>
      </div>

      <div className="packages-intro">
        <h2>
          Build your
          <br />
          <em>content plan.</em>
        </h2>

        <p>
          Choose how much content you need each month.
          Your estimated investment updates instantly.
        </p>
      </div>

      <div className="package-calculator">

        <div className="calculator-left">

          <span className="calculator-label">
            VIDEOS / MONTH
          </span>

          <div className="video-selector">

            <button onClick={decreaseVideos}>
              −
            </button>

            <span>{videoCount}</span>

            <button onClick={increaseVideos}>
              +
            </button>

          </div>

          <p>
            Starting from ₹{pricePerVideo.toLocaleString("en-IN")} per video
          </p>

        </div>

        <div className="calculator-right">

          <span className="estimate-label">
            ESTIMATED MONTHLY INVESTMENT
          </span>

          <h3>
            ₹{totalPrice.toLocaleString("en-IN")}
          </h3>

          <button
            className="package-button"
            onClick={() => {
              onRequest(videoCount);

              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            REQUEST THIS PACKAGE ↗
          </button>

        </div>

      </div>

    </section>
  );
};

export default Packages;