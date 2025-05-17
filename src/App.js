import { useEffect } from 'react';
import Aos from 'aos';


import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return <>
  <Header/>
  <main> 
    <Hero />
    <Portfolio />
    <Skills />
    <Contact />
  </main>

  <Footer/>
  </>
}

export default App;
