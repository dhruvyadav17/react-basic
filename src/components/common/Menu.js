import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { t } from "../../i18n"; // Correct relative path

export default function Menu({ items, className = "" }) {
  const lang = useSelector((state) => state.language.current);

  return (
    <ul className={`navbar-nav ${className}`}>
      {items.map((item) => (
        <li className="nav-item" key={item.path}>
          <NavLink className="nav-link d-flex gap-1" to={item.path}>
            <span>{item.icon}</span>
            <span>{t(lang, item.key)}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
