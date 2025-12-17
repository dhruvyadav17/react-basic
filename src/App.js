import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <Layout>
        <TextForm heading="Enter text to analyze" />
        <About />
      </Layout>
    </>
  );
}
