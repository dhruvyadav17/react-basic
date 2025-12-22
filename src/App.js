import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import TextForm from "./components/text/TextForm";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home heading="Welcome to TextUtils" />}
          />
          <Route
            path="/textform"
            element={<TextForm heading="Enter text to analyze" />}
          />
          <Route
            path="/about"
            element={<About heading="About TextUtils" />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
