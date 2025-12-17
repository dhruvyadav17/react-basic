import { useState } from "react";

const actions = [
  { key: "upper", label: "Uppercase" },
  { key: "lower", label: "Lowercase" },
  { key: "capitalize", label: "Capitalize" },
  { key: "reverse", label: "Reverse" },
  { key: "spaces", label: "Remove Spaces" },
  { key: "special", label: "Remove Special" },
  { key: "copy", label: "Copy" },
  { key: "vowels", label: "Vowels Count" },
  { key: "download", label: "Download" },
  { key: "speak", label: "Speak" },
  { key: "clear", label: "Clear" },
];

export default function TextForm({ heading, mode }) {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);

  const updateText = (action) => {
    switch (action) {
      case "upper": setText(text.toUpperCase()); break;
      case "lower": setText(text.toLowerCase()); break;
      case "capitalize": setText(text.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")); break;
      case "reverse": setText([...text].reverse().join("")); break;
      case "spaces": setText(text.split("\n").map(line => line.replace(/\s+/g," ").trim()).join("\n")); break;
      case "special": setText(text.replace(/[^a-zA-Z0-9 ]/g,"")); break;
      case "copy": navigator.clipboard.writeText(text); alert("Copied!"); break;
      case "vowels": alert(`Vowels: ${(text.match(/[aeiou]/gi) || []).length}`); break;
      case "download": {
        const file = new Blob([text], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "textutils.txt";
        link.click();
        break;
      }
      case "speak":
        if(text.trim().length===0){ alert("Enter text first!"); }
        else{ window.speechSynthesis.cancel(); window.speechSynthesis.speak(new SpeechSynthesisUtterance(text)); }
        break;
      case "clear": setText(""); break;
      default: break;
    }
  };

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className={`p-3 rounded mb-4 ${mode==="dark"?"bg-dark text-white":"bg-light text-dark"}`}>
      <h2>{heading}</h2>

      <textarea className="form-control mb-3 bg-white text-dark" rows="6" value={text} onChange={(e)=>setText(e.target.value)} style={{fontSize}} />

      <div className="mb-3">
        {actions.map(({key,label})=>(
          <button key={key} className={`btn ${key==="clear"?"btn-danger":"btn-primary"} me-2 mb-2`} onClick={()=>updateText(key)}>{label}</button>
        ))}
      </div>

      <div className="mb-3">
        <button className="btn btn-secondary me-2" onClick={()=>setFontSize(s=>s+2)}>A+</button>
        <button className="btn btn-secondary" onClick={()=>setFontSize(s=>Math.max(10,s-2))}>A-</button>
      </div>

      <div>
        <h4>Text Summary</h4>
        <p>{words} words | {text.length} characters</p>
        <p>{(words*0.008).toFixed(2)} minutes read</p>

        <h4>Preview</h4>
        <p>{text || "Nothing to preview"}</p>
      </div>
    </div>
  );
}
