import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/ak_new_logo.ico";

const DesktopHeader = () => {
  const [active, setActive] = useState(" ");

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg custom-navbar">
      <Link className="navbar-brand" to="/">
        <img src={logo} className="ak_logo_img" alt="AK Logo" />
      </Link>
      <button
        className="navbar-toggler collapsed border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink
            className={active === "/" ? "active" : ""}
            to="/"
            onClick={() => handleClick("/")}
          >
            <i className="bi bi-house-door-fill" /> Home
            <span className="sr-only">(current)</span>
          </NavLink>
          <div className="nav-line" />

          <NavLink
            className={active === "/about" ? "active" : ""}
            to="/about"
            onClick={() => handleClick("/about")}
          >
            <i className="bi bi-person-fill" /> About
          </NavLink>
          <div className="nav-line" />

          <NavLink
            className={active === "/projects" ? "active" : ""}
            to="/projects"
            onClick={() => handleClick("/projects")}
          >
            <i className="bi bi-sliders" /> Projects
          </NavLink>
          <div className="nav-line" />

          <NavLink
            className={active === "/contact" ? "active" : ""}
            to="/contact"
            onClick={() => handleClick("/contact")}
          >
            <i className="bi bi-envelope-fill" /> Contact
          </NavLink>
          <div className="nav-line" />

          <NavLink
            className={active === "/resume" ? "active" : ""}
            to="/resume"
            onClick={() => handleClick("/resume")}
          >
            <i className="bi bi-file-earmark-text-fill" /> Resume
          </NavLink>
          <div className="nav-line" />
        </div>

        <div className="resume-button">
          <a
            href="/files/Arun_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="bi bi-download"
              data-toggle="tooltip"
              title="Download Resume"
              style={{
                color: "#ff4533",
                fontWeight: "bolder",
                fontSize: "1.3rem",
              }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

const MobileHeader = () => {
  const [active, setActive] = useState("/");

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <div className="mobile-header fixed-top">
      <div className="mobile-nav-row">
        <NavLink
          className={`mobile-nav-item ${active === "/" ? "active" : ""}`}
          to="/"
          onClick={() => handleClick("/")}
        >
          <i className="bi bi-house-door-fill" />
          <span>Home</span>
        </NavLink>

        <NavLink
          className={`mobile-nav-item ${active === "/about" ? "active" : ""}`}
          to="/about"
          onClick={() => handleClick("/about")}
        >
          <i className="bi bi-person-fill" />
          <span>About</span>
        </NavLink>

        <NavLink
          className={`mobile-nav-item ${
            active === "/projects" ? "active" : ""
          }`}
          to="/projects"
          onClick={() => handleClick("/projects")}
        >
          <i className="bi bi-sliders" />
          <span>Projects</span>
        </NavLink>

        <NavLink
          className={`mobile-nav-item ${active === "/contact" ? "active" : ""}`}
          to="/contact"
          onClick={() => handleClick("/contact")}
        >
          <i className="bi bi-envelope-fill" />
          <span>Contact</span>
        </NavLink>

        <NavLink
          className={`mobile-nav-item ${active === "/resume" ? "active" : ""}`}
          to="/resume"
          onClick={() => handleClick("/resume")}
        >
          <i className="bi bi-file-earmark-text-fill" />
          <span>Resume</span>
        </NavLink>

        <a
          href="/files/Arun_Resume_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="bi bi-download"
            data-toggle="tooltip"
            title="Download Resume"
            style={{
              color: "#ff4533",
              fontWeight: "bolder",
              fontSize: "1.3rem",
            }}
          />
        </a>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
};

export default Header;
