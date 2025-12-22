export default function TextPreview({ text }) {
  return (
    <>
      <h5>Preview</h5>
      <p>{text || "Nothing to preview"}</p>
    </>
  );
}
