import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PageHeader({ title, icon }) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div
      className="mb-4 pb-2 border-bottom"
      style={{
        borderColor: mode === "dark" ? "#495057" : "#dee2e6",
      }}
    >
      {/* Breadcrumb */}
      <nav className="small mb-1">
        <NavLink to="/" className="text-decoration-none">
          Home
        </NavLink>
        {title && <span className="mx-2">/</span>}
        <span className="text-muted">{title}</span>
      </nav>

      {/* Heading */}
      <h3 className="d-flex align-items-center gap-2 m-0">
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </h3>
    </div>
  );
}
