import { useSelector } from "react-redux";
import Card from "../components/common/Card";
import { t } from "../i18n";
import usePageTitle from "../hooks/usePageTitle";

export default function Home({ heading }) {
  const mode = useSelector((state) => state.theme.mode);
  const lang = useSelector((state) => state.language.current);

  // Page title dynamically set karne ke liye
  usePageTitle(heading);

  return (
    <Card mode={mode} header={heading} headerIcon="🏠">
      <p className="fs-5">{t(lang, "home.description")}</p>
    </Card>
  );
}
