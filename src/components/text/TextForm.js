import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Card from "../common/Card";
import TextArea from "../common/TextArea";
import TextActions from "./TextActions";
import TextStats from "./TextStats";
import EmptyState from "../common/EmptyState";
import TextHistory from "./TextHistory";
import {
  toUpper,
  toLower,
  capitalizeWords,
  sentenceCase,
  reverseText,
  removeExtraSpaces,
  removeSpecial,
  speakText,
  exportPDF,
  exportDocx,
} from "../../utils/textUtils";

export default function TextForm({ heading }) {
  const mode = useSelector((state) => state.theme.mode);
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  useEffect(() => {
    if (text !== history[history.length - 1]) {
      setHistory((prev) => [...prev, text].slice(-10));
      setRedoStack([]);
    }
  }, [text]);

  const undo = useCallback(() => {
    if (history.length > 1) {
      setRedoStack((prev) => [history[history.length - 1], ...prev]);
      setText(history[history.length - 2]);
      setHistory((prev) => prev.slice(0, -1));
    }
  }, [history]);

  const redo = useCallback(() => {
    if (redoStack.length) {
      setText(redoStack[0]);
      setHistory((prev) => [...prev, redoStack[0]]);
      setRedoStack((prev) => prev.slice(1));
    }
  }, [redoStack]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === "TEXTAREA") return;
      if (e.key === "u" || e.key === "U") setText(toUpper(text));
      if (e.key === "l" || e.key === "L") setText(toLower(text));
      if (e.key === "c" || e.key === "C") setText("");
      if (e.key === "s" || e.key === "S") speakText(text);
      if (e.key === "d" || e.key === "D") exportPDF(text);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [text]);

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
    { label: "Download", action: downloadText },
    { label: "Speak", action: (t) => speakText(t) },
    { label: "Export PDF", action: (t) => exportPDF(t) },
    { label: "Export DOCX", action: (t) => exportDocx(t) },
    { label: "Clear", action: (_, s) => s(""), variant: "danger" },
  ];

  return (
    <Card mode={mode} header={heading} headerIcon="✍️">
      <TextArea
        label="Enter your text"
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here..."
      />

      <TextActions
        text={text}
        setText={setText}
        actions={actions}
        undo={undo}
        redo={redo}
      />

      <TextHistory history={history.slice(0, -1)} restore={(idx) => setText(history[idx])} />

      <hr />

      <TextStats words={words} characters={text.length} />

      <h6>Preview</h6>
      {text ? <p>{text}</p> : <EmptyState message="Nothing to preview" icon="👀" />}
    </Card>
  );
}
