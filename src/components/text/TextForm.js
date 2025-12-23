import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Card from "../common/Card";
import TextArea from "../common/TextArea";
import TextActions from "./TextActions";
import TextStats from "./TextStats";
import EmptyState from "../common/EmptyState";
import { t } from "../../i18n";
import usePageTitle from "../../hooks/usePageTitle";

import { useTextStats } from "../../hooks/useTextStats";
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
  const lang = useSelector((state) => state.language.current);

  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  usePageTitle(heading);

  const { words, characters, readTime } = useTextStats(text);

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

  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "textutils.txt";
    link.click();
  };

  const actions = [
    { label: t(lang, "buttons.uppercase"), action: (t, s) => s(toUpper(t)) },
    { label: t(lang, "buttons.lowercase"), action: (t, s) => s(toLower(t)) },
    {
      label: t(lang, "buttons.capitalize"),
      action: (t, s) => s(capitalizeWords(t)),
    },
    {
      label: t(lang, "buttons.sentence"),
      action: (t, s) => s(sentenceCase(t)),
    },
    { label: t(lang, "buttons.reverse"), action: (t, s) => s(reverseText(t)) },
    {
      label: t(lang, "buttons.removeSpaces"),
      action: (t, s) => s(removeExtraSpaces(t)),
    },
    {
      label: t(lang, "buttons.removeSpecial"),
      action: (t, s) => s(removeSpecial(t)),
    },
    {
      label: t(lang, "buttons.copy"),
      action: (t) => navigator.clipboard.writeText(t),
    },
    { label: t(lang, "buttons.download"), action: downloadText },
    { label: t(lang, "buttons.speak"), action: (t) => speakText(t) },
    { label: t(lang, "buttons.exportPDF"), action: (t) => exportPDF(t) },
    { label: t(lang, "buttons.exportDOCX"), action: (t) => exportDocx(t) },
    {
      label: t(lang, "buttons.clear"),
      action: (_, s) => s(""),
      variant: "danger",
    },
  ];

  return (
    <Card mode={mode} header={heading} headerIcon="✍️">
      <TextArea
        label={t(lang, "textForm.heading")}
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t(lang, "textForm.placeholder")}
      />

      <TextActions
        text={text}
        setText={setText}
        actions={actions}
        undo={undo}
        redo={redo}
      />

      <hr />

      <TextStats
        words={words}
        characters={characters}
        readTime={readTime}
        labelReadTime={t(lang, "textForm.readTime")}
        labelSummary={t(lang, "textForm.summary")}
      />

      <h6>{t(lang, "textForm.preview")}</h6>
      {text ? (
        <p>{text}</p>
      ) : (
        <EmptyState message={t(lang, "textForm.emptyPreview")} icon="👀" />
      )}
    </Card>
  );
}
