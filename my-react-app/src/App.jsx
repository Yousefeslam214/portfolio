import Nav from "./components/Nav";
import Home from "./components/Home";
// import Dark from "./components/Dark";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// i need when page reder some move of animation
const App = () => {
  return (
    <>

      <div className="container">
      </div>
        <Nav />
        <Home />
        <Skills />
        <Projects />
      <Footer />
    </>
  );
};

export default App;
