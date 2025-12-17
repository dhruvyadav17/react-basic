import Button from "../ui/Button";
import { TEXT_ACTIONS } from "../../config/textActions";
import * as utils from "../../utils/textUtils";

export default function TextActions({ text, setText }) {
  const hasText = text.trim().length > 0;

  const handleAction = (key) => {
    switch (key) {
      case "upper":
        setText(utils.toUpper(text));
        break;
      case "lower":
        setText(utils.toLower(text));
        break;
      case "capitalize":
        setText(utils.capitalizeWords(text));
        break;
      case "sentence":
        setText(utils.sentenceCase(text));
        break;
      case "reverse":
        setText(utils.reverseText(text));
        break;
      case "spaces":
        setText(utils.removeExtraSpaces(text));
        break;
      case "special":
        setText(utils.removeSpecialChars(text));
        break;
      case "copy":
        utils.copyText(text);
        break;
      case "vowels":
        alert(`Vowels: ${utils.vowelCount(text)}`);
        break;
      case "download":
        utils.downloadText(text);
        break;
      case "speak":
        utils.speakText(text);
        break;
      case "clear":
        setText("");
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-3">
      {TEXT_ACTIONS.map(({ key, label, type }) => (
        // <Button
        //   key={key}
        //   label={label}
        //   variant={type === "danger" ? "danger" : "primary"}
        //   onClick={() => handleAction(key)}
          
        // />
        <Button
          key={key}
          label={label}
          variant={type === "danger" ? "danger" : "primary"}
          onClick={() => handleAction(key)}
          disabled={!hasText && key !== "clear"}
        />
      ))}
    </div>
  );
}
