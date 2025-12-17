export default function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}) {
  return (
    <button
      className={`btn btn-${variant} me-2 mb-2`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
