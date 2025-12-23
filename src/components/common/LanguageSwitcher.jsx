// src/components/common/LanguageSwitcher.jsx
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage, setLanguage } from "../../redux/slices/languageSlice";
import languages from "../../config/languageConfig";

export default function LanguageSwitcher({ showToggleOnly = false }) {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language.current);

  const activeLang = languages.find((l) => l.code === currentLang);

  if (showToggleOnly) {
    // Simple toggle button
    return (
      <button
        className="btn btn-outline-secondary"
        onClick={() => dispatch(toggleLanguage())}
      >
        {currentLang === "en" ? "🇬🇧 EN" : "🇮🇳 HI"}
      </button>
    );
  }

  // Full dropdown
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        {activeLang.icon} {activeLang.label}
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className={`dropdown-item ${currentLang === lang.code ? "active" : ""}`}
              onClick={() => dispatch(setLanguage(lang.code))}
            >
              {lang.icon} {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
