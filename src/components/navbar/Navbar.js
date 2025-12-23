import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../redux/slices/themeSlice";
import { toggleLanguage } from "../../redux/slices/languageSlice";
import { t } from "../../i18n";
import LanguageSwitcher from "../common/LanguageSwitcher";


const menu = [
  { path: "/", key: "menu.home", icon: "🏠" },
  { path: "/textform", key: "menu.textForm", icon: "✍️" },
  { path: "/about", key: "menu.about", icon: "ℹ️" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const { mode, title } = useSelector((state) => state.theme);
  const lang = useSelector((state) => state.language.current);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold">
          {title}
        </NavLink>

        <ul className="navbar-nav me-auto">
          {menu.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink className="nav-link" to={item.path}>
                {item.icon} {t(lang, item.key)}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => dispatch(toggleMode())}
        >
          {mode === "dark" ? "☀️" : "🌙"}
        </button>

        {/* <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(toggleLanguage())}
        >
          {lang === "en" ? "🇮🇳" : "🇬🇧"}
        </button> */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
