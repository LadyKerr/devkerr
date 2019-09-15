import React from 'react';
import './App.css';
import NavBar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
     <NavBar />
     <main>
     <HeroSection />
     <Projects />
     </main>
     <Footer />
    </div>
  );
}

export default App;
