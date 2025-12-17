import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function PageLayout({ children }) {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      className={`min-vh-100 ${
        mode === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="container py-4">{children}</div>
    </div>
  );
}
