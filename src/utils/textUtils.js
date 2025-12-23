// Text transformations
export const toUpper = (text = "") => text.toUpperCase();
export const toLower = (text = "") => text.toLowerCase();
export const capitalizeWords = (text = "") =>
  text
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
export const sentenceCase = (text = "") =>
  text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";
export const reverseText = (text = "") => [...text].reverse().join("");
export const removeExtraSpaces = (text = "") =>
  text
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .join("\n");
export const removeSpecial = (text = "") =>
  text.replace(/[^a-zA-Z0-9 \n]/g, "");
export const speakText = (text = "") => {
  if (!text) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};

// Export PDF / DOCX
export const exportPDF = (text = "", filename = "textutils.pdf") => {
  import("jspdf").then(({ jsPDF }) => {
    const doc = new jsPDF();
    const lines = text.split("\n");
    lines.forEach((line, i) => doc.text(line, 10, 10 + i * 10));
    doc.save(filename);
  });
};

export const exportDocx = (text = "", filename = "textutils.docx") => {
  import("docx").then(({ Document, Packer, Paragraph, TextRun }) => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: text
            .split("\n")
            .map((line) => new Paragraph({ children: [new TextRun(line)] })),
        },
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    });
  });
};
