import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../common/Card";
import TextArea from "../common/TextArea";
import TextActions from "./TextActions";
import {
  toUpper,
  toLower,
  capitalizeWords,
  sentenceCase,
  reverseText,
  removeExtraSpaces,
  removeSpecial,
  speakText,
} from "../../utils/textUtils";

export default function TextForm({ heading }) {
  const mode = useSelector((state) => state.theme.mode);
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "textutils.txt";
    link.click();
  };

  const actions = [
    { label: "Uppercase", action: (t, s) => s(toUpper(t)) },
    { label: "Lowercase", action: (t, s) => s(toLower(t)) },
    { label: "Capitalize Words", action: (t, s) => s(capitalizeWords(t)) },
    { label: "Sentence Case", action: (t, s) => s(sentenceCase(t)) },
    { label: "Reverse", action: (t, s) => s(reverseText(t)) },
    { label: "Remove Spaces", action: (t, s) => s(removeExtraSpaces(t)) },
    { label: "Remove Special", action: (t, s) => s(removeSpecial(t)) },
    { label: "Copy", action: (t) => navigator.clipboard.writeText(t) },
    { label: "Download", action: () => downloadText() },
    { label: "Speak", action: (t) => speakText(t) },
    { label: "Clear", action: (_, s) => s(""), variant: "danger" },
  ];

  return (
    <Card
      mode={mode}
      header={heading}
    >
      <TextArea
        label="Enter your text below"
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here..."
      />

      <TextActions
        text={text}
        setText={setText}
        actions={actions}
      />

      <hr />

      <h6>Text Summary</h6>
      <p>
        {words} words | {text.length} characters
      </p>
      <p>{(words * 0.008).toFixed(2)} minutes read</p>

      <h6>Preview</h6>
      <p className="text-muted">
        {text || "Nothing to preview"}
      </p>
    </Card>
  );
}
