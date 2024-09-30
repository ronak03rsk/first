// App.js is the main component that renders all the other components.
import React from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Connect from './pages/Connect';
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
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
