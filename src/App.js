import React from 'react';
import './App.css';
import Header from './Components/Header'; // Corrected import path
import About from './Components/About'; // Corrected import path
import Projects from './Components/Project'; // Corrected import path
import Contact from './Components/Contact'; // Corrected import path

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
