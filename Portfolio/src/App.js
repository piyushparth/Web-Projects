import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;