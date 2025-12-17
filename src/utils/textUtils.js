export const toUpper = (text) => text.toUpperCase();

export const toLower = (text) => text.toLowerCase();

export const removeExtraSpaces = (text) =>
  text
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .join("\n");

export const removeSpecial = (text) =>
  text.replace(/[^a-zA-Z0-9 \n]/g, "");

export const reverseText = (text) => [...text].reverse().join("");

export const speakText = (text) => {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
};
