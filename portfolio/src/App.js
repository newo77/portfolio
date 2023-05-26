import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./PageApplication/Homepage";
import About from "./PageApplication/About";
import Skills from "./PageApplication/skills";
import Projects from "./PageApplication/projects";
import Contact from "./PageApplication/contact";
import Footer from "./components/footer";
import MailPage from "./admin/MailPage"; // Import the component for the mail page

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname !== "/mail" && (
        <>
          <Homepage />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
      <Routes>
        <Route path="/mail" element={<MailPage />} />
      </Routes>
    </>
  );
}

export default App;
