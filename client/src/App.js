import React from 'react';
import './App.css';
import NavBar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
     <NavBar />
     <main>
     <HeroSection />
     <Projects />
     </main>
    </div>
  );
}

export default App;
