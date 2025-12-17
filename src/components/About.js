import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { mode } = useTheme();

  return (
    <div className={`card ${mode === "dark" ? "bg-secondary text-light" : ""}`}>
      <div className="card-body">
        <h3>About TextUtils</h3>
        <p>
          This app helps you transform, clean, and analyze text using
          reusable and modular React components.
        </p>
      </div>
    </div>
  );
}
