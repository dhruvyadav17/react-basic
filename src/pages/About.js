import { useSelector } from "react-redux";
import Card from "../components/common/Card";
import { t } from "../i18n";
import usePageTitle from "../hooks/usePageTitle";

export default function About({ heading }) {
  const mode = useSelector((state) => state.theme.mode);
  const lang = useSelector((state) => state.language.current);

  // Page title dynamically set
  usePageTitle(heading);

  return (
    <Card mode={mode} header={heading} headerIcon="ℹ️">
      <p className="fs-5">{t(lang, "about.heading")}</p>
      <p>{t(lang, "about.description")}</p>
    </Card>
  );
}
