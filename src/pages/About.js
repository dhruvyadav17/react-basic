import { useSelector } from "react-redux";
import Card from "../components/common/Card";

export default function About({ heading }) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <Card
      mode={mode}
      header={heading}
    >
      <p className="fs-5">
        About <strong>TextUtils</strong>
      </p>
      <p>
        TextUtils is a simple yet powerful text utility app built using
        reusable and modular React components. It focuses on clean UI,
        reusability, and scalability.
      </p>
    </Card>
  );
}
