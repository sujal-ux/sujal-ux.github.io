import React from 'react'
import './index.css'
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import {Contact} from "./Components/Contact";
import {Skills} from "./Components/Skills";
import {Projects} from "./Components/Projects";
import { ThemeProvider } from "./themeProvider";


function App() {
  return (
    <ThemeProvider>
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
    </ThemeProvider>
  );
}

export default App;
