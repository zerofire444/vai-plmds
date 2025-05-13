import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10"></div>
      
      {/* Content */}
      <div 
        className={`max-w-6xl mx-auto px-6 py-24 relative z-20 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <img 
          src="https://media-hosting.imagekit.io/311ee87daf054e48/SANGALETTI%20CONSTRUCTIONS%20(1).png?Expires=1841776270&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=d6xg0WtJic7hLq9xEkbNSkYOeACfpJq6ZmTks1jcpis8nTFD40GYQJ30Hz6v7cUqGlDrpYnO~AF1YylX8h-6M3RwbKqAiwsdCtJRSTHMOg41UPlwLheC1vGb8tiNOfNwVNGFRIfah3Z1y6Cp3kom--ApS3c-tqVW4mEKbT53kFZBLDH9wuB8QRJrnxR5MDRLk-gU9D4yxB0iiXrofRmVDBppBgBvO9PVbYWHpEqQlV761F7-smTV103CQK1z9zBiQ1K7W1wQRssTzwQ1toIHmbRQ5RV7UuOGH3avYipIx4idRpQRXJ0x-Da3msQpkmz2vYdAYyYTx31eiQXN55OfOA__" 
          alt="Sangaletti Construction Logo" 
          className="h-40 mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Space with <span className="text-[#D4AF37]">Unparalleled Elegance</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Sangaletti Construction delivers luxury craftsmanship in Orlando.
        </p>
        <a 
          href="sms:+14077027575" 
          className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded hover:bg-[#C09B23] transition-all duration-300 text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Header;