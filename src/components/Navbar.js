import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import NavbarLinks from "./NavbarLinks";

export default function Navbar({ title }) {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>

        <NavbarLinks />

        <button
          className={`btn btn-${mode === "dark" ? "light" : "dark"}`}
          onClick={toggleMode}
        >
          {mode === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
