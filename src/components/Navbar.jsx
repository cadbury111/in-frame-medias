import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Brand */}
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-main">IN FRAME</span>
          <span className="brand-accent">MEDIAS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#manifesto">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Start Project */}
        <a href="#contact" className="start-project">
          Start a Project
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav">

          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#packages" onClick={closeMenu}>
            Packages
          </a>

          <a href="#manifesto" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>
      )}
    </header>
  );
}

export default Navbar;