import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../redux/slices/themeSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { mode, title } = useSelector((state) => state.theme);

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm ${
        mode === "dark"
          ? "navbar-dark bg-dark"
          : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          {title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto gap-2">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-medium">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/textform" className="nav-link fw-medium">
                Text Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link fw-medium">
                About
              </Link>
            </li>
          </ul>

          <button
            className={`btn ${
              mode === "dark" ? "btn-outline-light" : "btn-outline-dark"
            }`}
            onClick={() => dispatch(toggleMode())}
          >
            {mode === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
