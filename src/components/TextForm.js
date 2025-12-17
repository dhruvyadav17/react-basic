import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Button from "./common/Button";
import {
  toUpper,
  toLower,
  removeExtraSpaces,
  removeSpecial,
  reverseText,
  speakText,
} from "../utils/textUtils";

export default function TextForm({ heading }) {
  const { mode } = useTheme();
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div
      className={`card mb-4 shadow-sm ${
        mode === "dark" ? "bg-dark text-light" : ""
      }`}
    >
      <div className="card-body">
        <h2>{heading}</h2>

        <textarea
          className="form-control mb-3 bg-white text-dark"
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button onClick={() => setText(toUpper(text))}>Uppercase</Button>
        <Button onClick={() => setText(toLower(text))}>Lowercase</Button>
        <Button onClick={() => setText(reverseText(text))}>Reverse</Button>
        <Button onClick={() => setText(removeExtraSpaces(text))}>
          Remove Spaces
        </Button>
        <Button onClick={() => setText(removeSpecial(text))}>
          Remove Special
        </Button>
        <Button onClick={() => navigator.clipboard.writeText(text)}>
          Copy
        </Button>
        <Button onClick={() => speakText(text)}>Speak</Button>
        <Button variant="danger" onClick={() => setText("")}>
          Clear
        </Button>

        <hr />

        <h5>Text Summary</h5>
        <p>
          {words} words | {text.length} characters
        </p>
        <p>{(words * 0.008).toFixed(2)} minutes read</p>

        <h5>Preview</h5>
        <p>{text || "Nothing to preview"}</p>
      </div>
    </div>
  );
}
