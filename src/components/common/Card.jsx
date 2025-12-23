export default function Card({
  mode,
  children,
  header,
  footer,
  className = "",
  headerIcon,
}) {
  return (
    <div
      className={`card mb-4 ${
        mode === "dark" ? "bg-dark text-light" : ""
      } ${className}`}
    >
      {header && (
        <div className="card-header d-flex align-items-center gap-2">
          {headerIcon && <span>{headerIcon}</span>}
          <span>{header}</span>
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
