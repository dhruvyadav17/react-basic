export default function TextArea({ value, onChange }) {
  return (
    <textarea
      className="form-control mb-3 bg-white text-dark"
      rows="6"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
