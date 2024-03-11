import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FrontendProjects from "../components/Frontendprojects";
import UiProjects from "../components/UiProjects";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <FrontendProjects/>
      <UiProjects/>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
