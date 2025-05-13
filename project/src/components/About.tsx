import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className={`md:w-1/2 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img
              src="https://media-hosting.imagekit.io/65f003a0b2ae4f98/Design%20sem%20nome.png?Expires=1841765436&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VBw2pIaqXfP9hKD09ANX18K9Q5Ue5nQWmAGTBBUnKRc~MUpxr-0mGh5hTEEm2YXRnjAyns4JBT3h2tNG2ExjugDO6Qw9JbdiRXfvz3b8BqEvKkYObCg0f3F7V-K0gDNXPCDDrSOwSyOrwoHSDwTfJDO4WIwo3zsqyCohEACiDf2wDNolnKXf-0hT7xSrFurW8QJ~Qz9ijjoZM0uR8n6OMB~AiCk~JyycsfZrOk84yGfgxXvFtTIeYX6ImcVNut4Ho7TEkSYLG9O0Qu8y0cQEafmqf1srECV3W7dWXayvh860jHBGApFEKP67liP92aQAf9VDRZO~Roip0OVcqWF~3g__"
              alt="Sangaletti Construction"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div 
            className={`md:w-1/2 transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#D4AF37]">Who</span> We Are
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Sangaletti Construction is Orlando's premier construction firm, specializing in high-end residential and commercial projects. 
              With a commitment to quality and precision, we turn your vision into reality with unmatched expertise.
            </p>
            <p className="text-lg leading-relaxed">
              Our team of skilled professionals combines innovative techniques with traditional craftsmanship to create spaces that are not only 
              aesthetically stunning but also structurally sound and functionally efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;