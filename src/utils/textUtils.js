// src/utils/textUtils.js
export const toUpper = (text) => text.toUpperCase();
export const toLower = (text) => text.toLowerCase();
export const capitalizeWords = (text) =>
  text
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
export const sentenceCase = (text) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";
export const reverseText = (text) => [...text].reverse().join("");
export const removeExtraSpaces = (text) =>
  text.split("\n").map((l) => l.replace(/\s+/g, " ").trim()).join("\n");
export const removeSpecial = (text) =>
  text.replace(/[^a-zA-Z0-9 \n]/g, "");
export const speakText = (text) => {
  if (!text) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};
