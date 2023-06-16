import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./PageApplication/Homepage";
import About from "./PageApplication/About";
import Skills from "./PageApplication/skills";
import Projects from "./PageApplication/projects";
import Contact from "./PageApplication/contact";
import Footer from "./components/footer";
import NotFound from "./components/notFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

function MainContent() {
  return (
    <>
      <Navbar />
      <>
        <Homepage />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </>
  );
}

function PageNotFound() {
  return (
    <>
      <Navbar />
      <>
        <NotFound />
      </>
    </>
  );
}

export default App;
