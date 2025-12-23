export default function TextArea({
  value,
  onChange,
  rows = 4,
  placeholder = "",
  disabled = false,
  className = "",
  label = "",
}) {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <textarea
        className={`form-control ${className}`}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}
