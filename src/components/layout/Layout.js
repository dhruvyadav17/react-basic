// src/components/layout/Layout.jsx
import { useSelector } from "react-redux";
import PageHeader from "../common/PageHeader";
import usePageTitle from "../../hooks/usePageTitle";
import Footer from "../footer/Footer";

export default function Layout({ children, pageTitle, pageIcon }) {
  const mode = useSelector((state) => state.theme.mode);

  usePageTitle(pageTitle);

  return (
    <div
      className={`container my-4 p-4 rounded shadow ${
        mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ minHeight: "80vh", display: "flex", flexDirection: "column" }}
    >
      {/* Header */}
      {pageTitle && <PageHeader title={pageTitle} icon={pageIcon} />}

      {/* Page content */}
      <div style={{ flex: 1 }}>{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
