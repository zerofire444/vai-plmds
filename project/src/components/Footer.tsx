import React from 'react';
import { PhoneCall, Mail, MapPin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-10">
          <img 
            src="https://media-hosting.imagekit.io/311ee87daf054e48/SANGALETTI%20CONSTRUCTIONS%20(1).png?Expires=1841776270&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=d6xg0WtJic7hLq9xEkbNSkYOeACfpJq6ZmTks1jcpis8nTFD40GYQJ30Hz6v7cUqGlDrpYnO~AF1YylX8h-6M3RwbKqAiwsdCtJRSTHMOg41UPlwLheC1vGb8tiNOfNwVNGFRIfah3Z1y6Cp3kom--ApS3c-tqVW4mEKbT53kFZBLDH9wuB8QRJrnxR5MDRLk-gU9D4yxB0iiXrofRmVDBppBgBvO9PVbYWHpEqQlV761F7-smTV103CQK1z9zBiQ1K7W1wQRssTzwQ1toIHmbRQ5RV7UuOGH3avYipIx4idRpQRXJ0x-Da3msQpkmz2vYdAYyYTx31eiQXN55OfOA__" 
            alt="Sangaletti Construction Logo" 
            className="h-32"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="sms:+14077027575" 
                  className="flex items-center justify-center md:justify-start text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <PhoneCall size={18} className="mr-2 text-[#D4AF37]" />
                  +1 (407) 702-7575
                </a>
              </li>
              <li>
                <a 
                  href="mailto:dionatansangaletti@gmail.com" 
                  className="flex items-center justify-center md:justify-start text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail size={18} className="mr-2 text-[#D4AF37]" />
                  dionatansangaletti@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-300">
                <div className="text-[#D4AF37] mr-2">EIN:</div>
                30-1400479
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Location</h3>
            <div className="flex items-center justify-center text-gray-300 mb-4">
              <MapPin size={18} className="mr-2 text-[#D4AF37]" />
              Orlando, FL
            </div>
            <div className="aspect-[16/9] w-full max-w-xs mx-auto overflow-hidden rounded-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.5539977694!2d-81.50386576454847!3d28.481168534802787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbr!4v1650394000000!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sangaletti Construction Location"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Follow Us</h3>
            <div className="flex justify-center md:justify-end">
              <a 
                href="https://www.instagram.com/sangaletticonstruction/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-12 h-12 bg-black border border-[#D4AF37] rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sangaletti Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer