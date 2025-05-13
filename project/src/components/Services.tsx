import React from 'react';
import { useInView } from '../hooks/useInView';

interface ServiceCardProps {
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay, inView }) => {
  return (
    <div 
      className={`bg-black border border-gray-800 p-8 rounded-lg transition-all duration-700 hover:border-[#D4AF37] group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold mb-4 text-[#D4AF37] group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 mb-4">
        {description}
      </p>
      <div className="w-12 h-1 bg-[#D4AF37] transform origin-left transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const services = [
    {
      title: "Roofs and Pergolas",
      description: "Craft durable and elegant roofs or pergolas tailored to your style.",
    },
    {
      title: "Paintings",
      description: "Transform spaces with premium paint finishes and expert application.",
    },
    {
      title: "Coatings",
      description: "High-quality surface coatings for durability and aesthetic perfection.",
    },
    {
      title: "Bathroom Renovation",
      description: "Luxury bathroom transformations with premium fixtures and finishes.",
    },
    {
      title: "Maintenance and Repairs",
      description: "Comprehensive maintenance services to preserve your property's value.",
    },
    {
      title: "Electrical",
      description: "Expert electrical installations and upgrades for safety and efficiency.",
    },
    {
      title: "Reforms and Constructions",
      description: "Complete construction and renovation services with precision and excellence.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-black" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-[#D4AF37]">Premium</span> Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Excellence in every detail, from concept to completion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              delay={index * 100}
              inView={inView}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
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

export default Services;