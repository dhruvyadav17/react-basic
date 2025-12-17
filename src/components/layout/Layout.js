import { useTheme } from "../../context/ThemeContext";

export default function Layout({ children }) {
  const { mode } = useTheme();

  return (
    <div className={`container py-4 ${mode === "dark" ? "text-light" : ""}`}>
      {children}
    </div>
  );
}
