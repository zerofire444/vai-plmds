import React from 'react';
import { useInView } from '../hooks/useInView';
import { Instagram } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-black" id="connect">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className={`text-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Connect <span className="text-[#D4AF37]">With Us</span>
          </h2>
          
          <div className="flex justify-center mb-10">
            <a 
              href="https://www.instagram.com/sangaletticonstruction/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-14 h-14 bg-black border border-[#D4AF37] rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          <a 
            href="sms:+14077027575" 
            className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded hover:bg-[#C09B23] transition-all duration-300 text-lg inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;