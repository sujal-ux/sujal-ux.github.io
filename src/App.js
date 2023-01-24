import React from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Editor } from "./Components/WorkProject/Editor";
import { Intellects } from "./Components/WorkProject/Intellects";
import { Hands } from "./Components/WorkProject/Hands";
import "./index.css";
import "./Css/Home.css";
import "./Css/Skills.css";
import "./Css/About.css";
import "./Css/Projects.css";
import "./Css/Contact.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <div id="projects">
        <Projects />
        <Intellects />
        <Hands />
        <Editor />
      </div>
      <Contact />
    </>
  );
}

export default App;
