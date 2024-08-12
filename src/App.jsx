import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExp />
      <About />
      <Projects />
      <Footer />
    </>
  );
};
export default App;
