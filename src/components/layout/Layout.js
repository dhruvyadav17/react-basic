import { useSelector } from "react-redux";
import PageHeader from "../common/PageHeader";
import usePageTitle from "../../hooks/usePageTitle";

export default function Layout({ children, pageTitle, pageIcon }) {
  const mode = useSelector((state) => state.theme.mode);

  usePageTitle(pageTitle);

  return (
    <div className={`container py-4 ${mode === "dark" ? "text-light" : ""}`}>
      {pageTitle && (
        <PageHeader title={pageTitle} icon={pageIcon} />
      )}
      {children}
    </div>
  );
}
