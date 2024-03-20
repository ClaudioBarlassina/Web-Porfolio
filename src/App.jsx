import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NewsLetters from "./Components/NewsLetters";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <NewsLetters/>
      <Footer/>
    </>
  );
}

export default App;
