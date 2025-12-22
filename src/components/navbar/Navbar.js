import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../redux/slices/themeSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { mode, title } = useSelector((state) => state.theme);

  // ✅ MENU CONFIG (REUSABLE)
  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/textform", label: "Text Form", icon: "✍️" },
    { path: "/about", label: "About", icon: "ℹ️" },
  ];

  const linkClass = ({ isActive }) =>
    `nav-link d-flex align-items-center gap-1 ${
      isActive ? "fw-bold text-primary" : ""
    }`;

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        {/* Logo / Title */}
        <NavLink to="/" className="navbar-brand fw-bold">
          {title}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* MENU */}
          <ul className="navbar-nav me-auto gap-2">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink to={item.path} className={linkClass}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* THEME TOGGLE */}
          <button
            className={`btn ${mode === "dark" ? "btn-light" : "btn-dark"}`}
            onClick={() => dispatch(toggleMode())}
          >
            {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
