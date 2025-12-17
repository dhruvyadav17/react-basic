export default function ThemeSwitch({ mode, toggleMode }) {
  return (
    <div className="form-check form-switch text-secondary">
      <input
        className="form-check-input"
        type="checkbox"
        checked={mode === "dark"}
        onChange={toggleMode}
      />
      <label className="form-check-label">
        {mode === "dark" ? "Dark" : "Light"}
      </label>
    </div>
  );
}
