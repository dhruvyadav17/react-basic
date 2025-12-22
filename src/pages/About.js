import { useSelector } from "react-redux";
import Card from "../components/common/Card";

export default function About({ heading }) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <Card
      mode={mode}
      header={heading}
      headerIcon="ℹ️"
    >
      <p className="fs-5">
        About <strong>TextUtils</strong>
      </p>
      <p>
        TextUtils is built using modular and reusable React components.
        The app focuses on clean UI, scalability, and maintainable code.
      </p>
    </Card>
  );
}
