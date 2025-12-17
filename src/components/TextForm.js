import { useState } from "react";
import TextArea from "./text/TextArea";
import TextActions from "./text/TextActions";
import TextSummary from "./text/TextSummary";

export default function TextForm({ heading }) {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>{heading}</h2>

      <TextArea value={text} onChange={setText} />

      <TextActions text={text} setText={setText} />

      <TextSummary text={text} />
    </div>
  );
}
