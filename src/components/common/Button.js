export default function Button({ variant = "primary", onClick, children }) {
  return (
    <button
      type="button"
      className={`btn btn-${variant} me-2 mb-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
