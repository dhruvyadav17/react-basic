export default function TextStats({ words, characters }) {
  return (
    <>
      <p>
        {words} words | {characters} characters
      </p>
      <p>{(words * 0.008).toFixed(2)} minutes read</p>
    </>
  );
}
