import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CodeStage from "./components/CodeStage";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Hero />
      <CodeStage />
      <About />
      <Contact />
    </div>
  );
}
