import React from "react"; 

import Header from './header';
import Home from "./Home";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";
import Project from "./work1";
import Experience from "./intern";
import Certificates from "./certification";


function App() {
  return (
    <div>
      
      <Header/>
      <Home />
      <About />
      
      <Skills />
      <Project />
      <Experience />
      <Certificates />
      <Contact />
      
      
    </div>
  );
}

export default App;