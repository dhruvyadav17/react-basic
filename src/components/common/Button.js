// src/components/common/Button.jsx
// src/components/common/Button.jsx
export default function Button({
  variant = "primary",
  size = "",
  onClick,
  children,
  disabled = false,
  icon = null,
  className = "",
}) {
  return (
    <button
      type="button"
      className={`btn btn-${variant} ${size ? `btn-${size}` : ""} me-2 mb-2 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="me-1">{icon}</span>}
      {children}
    </button>
  );
}
