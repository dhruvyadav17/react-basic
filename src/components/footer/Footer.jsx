// src/components/footer/Footer.jsx
import Menu from "../common/Menu";
import LanguageSwitcher from "../common/LanguageSwitcher";
import menuConfig from "../../config/menuConfig";

export default function Footer() {
  return (
    <footer className="mt-4 pt-3 border-top">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Horizontal menu arrangement */}
        <Menu items={menuConfig} className="d-flex flex-row gap-3 mb-3 mb-md-0" />
        
        <LanguageSwitcher />
        
        <small className="text-muted">
          &copy; {new Date().getFullYear()} TextUtils. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
