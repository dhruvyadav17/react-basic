import { useTheme } from "../context/ThemeContext";

export default function Navbar({ title }) {
  const { mode, toggleMode } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">{title}</span>

        {/* Dummy links – no routing */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item nav-link">Home</li>
          <li className="nav-item nav-link">About</li>
        </ul>

        <button
          className={`btn ${mode === "dark" ? "btn-light" : "btn-dark"}`}
          onClick={toggleMode}
        >
          {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
