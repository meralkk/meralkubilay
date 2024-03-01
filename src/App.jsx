// App.js veya App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Projects from '../pages/projects/projects';
import Contact from '../pages/contact/contact';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;