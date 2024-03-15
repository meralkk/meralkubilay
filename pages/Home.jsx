import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FrontendProjects from "../components/Frontendprojects";
import UiProjects from "../components/UiProjects";
import Resume from "../components/Resume";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <FrontendProjects/>
      <UiProjects/>
      <Resume/>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
