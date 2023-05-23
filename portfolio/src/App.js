import React from 'react';
import Navbar from "./components/navbar";
import Homepage from "./PageApplication/Homepage";
import About from "./PageApplication/About";
import Skills from "./PageApplication/skills";
import Projects from "./PageApplication/projects";
import Contact from "./PageApplication/contact";
import Footer from "./components/footer";


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Homepage></Homepage>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;