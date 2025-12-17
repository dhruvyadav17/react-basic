import { wordCount, readingTime } from "../../utils/textUtils";

export default function TextSummary({ text }) {
  return (
    <>
      <h5>Text Summary</h5>
      <p>
        {wordCount(text)} words | {text.length} characters
      </p>
      <p>{readingTime(text)} minutes read</p>

      <h5>Preview</h5>
      <p>{text || "Nothing to preview"}</p>
    </>
  );
}
