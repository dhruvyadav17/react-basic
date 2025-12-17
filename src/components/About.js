import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      id="about"
      className={`p-3 rounded ${
        mode === "dark" ? "bg-secondary text-white" : "bg-white text-dark"
      }`}
    >
      <h2>About TextUtils</h2>
      <p>
        This app helps you transform, clean, and analyze text with reusable,
        modular React components.
      </p>
    </div>
  );
}
