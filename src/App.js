import React from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { ThemeProvider } from "./themeProvider";
import { Editor } from "./Components/WorkProject/Editor";
import { Intellects } from "./Components/WorkProject/Intellects";
import { Hands } from "./Components/WorkProject/Hands";
import { Footer } from "./Components/Footer";
import "./index.css";
import "./Css/Home.css";
import "./Css/Skills.css";
import "./Css/About.css";
import "./Css/Projects.css";
import "./Css/Footer.css";
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />  
      <Intellects />
      <Hands />
      <Editor />
      <Contact />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
