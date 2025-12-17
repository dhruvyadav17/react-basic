export default function About({ mode }) {
  return (
    <div className={`p-3 rounded mb-4 ${mode==="dark"?"bg-dark text-white":"bg-light text-dark"}`}>
      <h2>About TextUtils</h2>
      <p>
        TextUtils is a React app to manipulate and analyze text. Convert to uppercase/lowercase, capitalize, reverse, remove spaces/special chars, count vowels, copy, download, or speak text.
      </p>
      <h4>Features:</h4>
      <ul>
        <li>Dark/Light mode</li>
        <li>Text summary & preview</li>
        <li>Font size control</li>
        <li>All actions in one simple interface</li>
      </ul>
    </div>
  );
}
