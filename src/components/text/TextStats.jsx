import appConfig from "../../config/appConfig";

export default function TextStats({ words, characters }) {
  const readingTime = words / appConfig.readingSpeedWpm; // words per minute
  return (
    <>
      <p>
        {words} words | {characters} characters
      </p>
      {/* <p>{(words * 0.008).toFixed(2)} minutes read</p> */}
      <p>{readingTime} minutes read</p>
    </>
  );
}
