import React from 'react'
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
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Intellects/>
        <Hands/>
        <Editor/> 
      <Contact/>
    </ThemeProvider>
  );
}

export default App;
