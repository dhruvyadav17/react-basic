import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <main
      className={`container py-5 ${
        mode === "dark" ? "text-light" : ""
      }`}
    >
      {children}
    </main>
  );
}
