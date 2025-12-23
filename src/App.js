import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import TextForm from "./components/text/TextForm";
import About from "./pages/About";
import { t } from "./i18n";

function App() {
  const lang = useSelector((state) => state.language.current);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <BrowserRouter>
      <Navbar />

      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home heading={t(lang, "home.heading")} />}
          />
          <Route
            path="/textform"
            element={<TextForm heading={t(lang, "textForm.heading")} />}
          />
          <Route
            path="/about"
            element={<About heading={t(lang, "about.heading")} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
