import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ title, mode, toggleMode }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <div className="form-check form-switch text-nowrap">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={toggleMode}
              checked={mode === "dark"}
            />
            <label
              className={`form-check-label ${
                mode === "dark" ? "text-white" : "text-dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};
Navbar.defaultProps = {
  title: "TextUtils",
};
