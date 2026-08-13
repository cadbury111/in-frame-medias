const Footer = () => {
  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/inframemedias/",
      "_blank"
    );
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917395877142",
      "_blank"
    );
  };

  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <span>IN FRAME</span>
          <span>MEDIAS</span>
        </div>

        <div className="footer-title">
          <h2>
            Your story.
            <br />
            <em>In motion.</em>
          </h2>
        </div>

      </div>

      <div className="footer-bottom">

        <div className="footer-links">

          <button
            type="button"
            onClick={openInstagram}
          >
            Instagram ↗
          </button>

          <a href="mailto:ccadbury470@gmail.com">
            Email ↗
          </a>

          <button
            type="button"
            onClick={openWhatsApp}
          >
            WhatsApp ↗
          </button>

        </div>

        <div className="footer-copy">
          © 2026 IN FRAME MEDIAS
        </div>

      </div>

    </footer>
  );
};

export default Footer;