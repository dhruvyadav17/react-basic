export default function Card({
  mode,
  children,
  header,
  footer,
  className = "",
}) {
  const isDark = mode === "dark";

  return (
    <div
      className={`card mb-4 ${className}`}
      style={{
        backgroundColor: isDark ? "#212529" : "#fff",
        color: isDark ? "#f8f9fa" : "#212529",
        border: isDark ? "1px solid #343a40" : "1px solid #dee2e6",
      }}
    >
      {header && (
        <div
          className="card-header fw-bold"
          style={{
            backgroundColor: isDark ? "#2c3034" : "#f8f9fa",
            borderBottom: isDark
              ? "1px solid #343a40"
              : "1px solid #dee2e6",
          }}
        >
          {header}
        </div>
      )}

      <div className="card-body">{children}</div>

      {footer && (
        <div
          className="card-footer"
          style={{
            backgroundColor: isDark ? "#2c3034" : "#f8f9fa",
            borderTop: isDark
              ? "1px solid #343a40"
              : "1px solid #dee2e6",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
