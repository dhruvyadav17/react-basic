import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import PageLayout from "./components/layout/PageLayout";
import { ThemeProvider } from "./context/ThemeContext";
import { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState("light"); // single source of truth

  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

  // Update body class whenever mode changes
  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(mode === "light" ? "light-mode" : "dark-mode");
  }, [mode]);

  return (
    <ThemeProvider>
      <Navbar title="TextUtils" />
      <PageLayout>
        <TextForm heading="Enter text to analyze" />
        <About />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
