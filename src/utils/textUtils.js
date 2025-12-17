export const toUpper = (text) => text.toUpperCase();

export const toLower = (text) => text.toLowerCase();

export const capitalizeWords = (text) =>
  text
    .split(" ")
    .map(
      (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join(" ");

export const sentenceCase = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

export const reverseText = (text) =>
  [...text].reverse().join("");

export const removeExtraSpaces = (text) =>
  text
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .join("\n");

export const removeSpecialChars = (text) =>
  text.replace(/[^a-zA-Z0-9 \n]/g, "");

export const copyText = (text) =>
  navigator.clipboard.writeText(text);

export const speakText = (text) => {
  if (!text.trim()) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};

export const vowelCount = (text) =>
  (text.match(/[aeiou]/gi) || []).length;

export const downloadText = (text) => {
  const file = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "textutils.txt";
  link.click();
};

export const wordCount = (text) =>
  text.trim() ? text.trim().split(/\s+/).length : 0;

export const readingTime = (text) =>
  (wordCount(text) * 0.008).toFixed(2);
