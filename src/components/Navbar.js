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
        <span className="navbar-brand">{title}</span>

        <button
          className={`btn ${mode === "dark" ? "btn-light" : "btn-dark"}`}
          onClick={toggleMode}
        >
          {mode === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
