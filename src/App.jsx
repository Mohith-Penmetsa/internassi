import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Avatars from './components/Avatars';
import SectionSplit from './components/SectionSplit';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <Avatars />
      <SectionSplit />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
