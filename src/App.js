// App.js is the main component that renders all the other components.
import React from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';  
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
