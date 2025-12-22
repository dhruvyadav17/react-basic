export default function Card({
  mode,
  children,
  header,
  footer,
  className = "",
  headerIcon = null,
}) {
  const isDark = mode === "dark";

  return (
    <div
      className={`card mb-4 ${className}`}
      style={{
        backgroundColor: isDark ? "#212529" : "#ffffff",
        color: isDark ? "#f8f9fa" : "#212529",
        border: isDark ? "1px solid #343a40" : "1px solid #dee2e6",
      }}
    >
      {/* ===== Card Header ===== */}
      {header && (
        <div
          className="card-header d-flex align-items-center gap-2 fw-semibold"
          style={{
            background: isDark
              ? "linear-gradient(135deg, #343a40, #212529)"
              : "linear-gradient(135deg, #f8f9fa, #ffffff)",
            borderBottom: isDark
              ? "1px solid #495057"
              : "1px solid #dee2e6",
          }}
        >
          {headerIcon && <span>{headerIcon}</span>}
          <span>{header}</span>
        </div>
      )}

      {/* ===== Card Body ===== */}
      <div className="card-body">{children}</div>

      {/* ===== Card Footer ===== */}
      {footer && (
        <div
          className="card-footer"
          style={{
            backgroundColor: isDark ? "#2c3034" : "#f8f9fa",
            borderTop: isDark
              ? "1px solid #495057"
              : "1px solid #dee2e6",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
