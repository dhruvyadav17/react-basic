export default function TextSummary({ words, characters, readTime }) {
  return (
    <>
      <h5>Text Summary</h5>
      <p>{words} words | {characters} characters</p>
      <p>{readTime} minutes read</p>
    </>
  );
}
