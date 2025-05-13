import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <About />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;