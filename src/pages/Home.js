import { useSelector } from "react-redux";
import Card from "../components/common/Card";

export default function Home({ heading }) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <Card
      mode={mode}
      header={heading}
      headerIcon="🏠"
    >
      <p className="fs-5">
        Welcome to <strong>TextUtils</strong>
      </p>
      <p>
        A simple and powerful text utility app where you can transform,
        clean, and analyze text quickly and easily.
      </p>
    </Card>
  );
}
