import { useSelector } from "react-redux";
import Card from "../components/common/Card";

export default function Home({ heading }) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <Card
      mode={mode}
      header={heading}
    >
      <p className="fs-5">
        Welcome to <strong>TextUtils</strong> 🚀
      </p>
      <p>
        This application helps you manipulate and analyze text efficiently.
        You can convert text to uppercase, lowercase, remove extra spaces,
        and much more — all in one place.
      </p>
    </Card>
  );
}
