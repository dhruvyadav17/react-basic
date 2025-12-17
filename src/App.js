import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import PageLayout from "./components/layout/PageLayout";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
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
