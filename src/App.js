import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); // single source of truth

  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

  // Update body class whenever mode changes
  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(mode === "light" ? "light-mode" : "dark-mode");
  }, [mode]);

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
