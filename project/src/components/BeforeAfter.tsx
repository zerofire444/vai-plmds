import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSlide {
  before: string;
  after: string;
}

const BeforeAfter: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const slides: BeforeAfterSlide[] = [
    {
      before: "https://media-hosting.imagekit.io/2bd14d12cf3f428a/WhatsApp%20Image%202025-05-13%20at%201.17.24%20PM%20(1).jpeg?Expires=1841765014&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aR~ZcG-wysMZCb6-bQj9ef-GObpZlvwlpOMCPbIR1kns1r9jEbbz7H9dZJzt276jPTvEFEqZ5D20VqIurmxwRGrw1~t46IlGljfsD9phAK-XQNTzdiE5QHm7lWpsRRhXo2YoL8izygHUIj42bbG-j-ugfWG1WHuCJ~HPEZD~DsX9AqGzmokFnndBGkd~RRr~p68WrZ0ShEQgVnyeXJoRYdxP3~oqZMS9JoWamenepYGLHIT1-E-CpvjsynNddTVaQ7Z0FJ7oEOEOib8QdclTnKU7uuJpB91GwAt~L5yiK9YmzJOh2cv9sR9oOvQUAHYM0IROQ0I22Hrey93e1YTlUA__",
      after: "https://media-hosting.imagekit.io/39c42cba510b4e04/WhatsApp%20Image%202025-05-13%20at%201.17.24%20PM.jpeg?Expires=1841765014&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=F-~CaAlUlw~EMWfGANnQkQ4s-6FHJF7mBn~O7uO-ECQx7HHfJ0k-3oaq7UUJtcMlbkS3pfQ5JcsB0eok6Q8RbuF2LAn4g056z3FoAYI7CGOoMFk2CurhwBdhHO19j-k-29EfhyeZ82ilQsqFZqnCT94HVVvuD~bLwqGChoP-yzrenDFxwBINXZWaWByoAgV36lulmBte-NZCirKQ23xvmfC5WETYFkPPW9XLFrMl32QctCYc8pWGIbTNarIw6mCO87rpwqUpZbqnkSXR1Wj5qjq36RL1FDfNg4WUpwiTVOm1F48BNuZG92mdvOMxiRw9JgV8OtFP9sjPAD88jXHnxQ__"
    },
    {
      before: "https://media-hosting.imagekit.io/2883e13b3d3b4bc6/WhatsApp%20Image%202025-05-13%20at%201.29.04%20PM.jpeg?Expires=1841765436&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0L7Td80Jx8CXjJZSPDhXXwqDTH4NyWBCBb0NXE9ZqGqV8ZyslqsKaCBmoBrwA4I3MAMNwQx8Jglrwbb0k79CUKH1qRF6AqA5JWP8xnA2jMR1XpHXkLeJ5wBKaTJlrRzUIXYoOXD3hhpgljx2SEclqcmeYgTSiykvXba05nAIZWit2jY8tCdlgh9rG-gFyTP5vGS-KT1pjJV8NvaKwFgk83VVOhvnP-ytWULWTABwxdNiHBKWzWOIlGLvy18DbRM0zKFizlf~PjJPfefjf64xA5cu9PutEsVsuoqVjlU~~iwRrapWhCmmMWBlsVGNVGP0NLZQteiyq5OJN3p4xc-pmg__",
      after: "https://media-hosting.imagekit.io/c877e35dbc514fc1/WhatsApp%20Image%202025-05-13%20at%201.29.04%20PM%20(1).jpeg?Expires=1841765436&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CTpLph5GgMLXwE13Q3l9cOy8dweo6KLpFSpNuLu6I1xU8MulszzvweVScAZMYDZmaFAU1X1ZKOfqV6Azk87m~zza1HkumWXrIK0sED0Gw6DuMxCov9Wmp4Z0dWvPCnyto4VuhtgsAaNhltb3KSP32HMiFJ9caHZOwwxVrYJkfXgSuWH3AlYzY6XUMTUctEuo5BtUgMbSQ7cCgmIpy65B569AsRtg8WBpDutF2kCVuD3Vba0ml7VpagzElLeYY5HTrnuzOGF7DfUEWWYx06VJdhGeg14cMcsrBUiRIOksm6GyqH2tJVPFAFqElrzlz1aV8Ir699IPAYsBcGFJRTck5Q__"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  // Auto advance slides
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-black" id="transformations">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See the <span className="text-[#D4AF37]">Transformation</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Before and after showcases of our exceptional craftsmanship
          </p>
        </div>
        
        <div 
          className={`relative transition-opacity duration-700 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10"></div>
              <img 
                src={slides[currentSlide].before} 
                alt="Before" 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded text-white font-semibold z-20">
                Before
              </div>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10"></div>
              <img 
                src={slides[currentSlide].after} 
                alt="After" 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-[#D4AF37] px-4 py-2 rounded text-black font-semibold z-20">
                After
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-md text-white p-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors z-30"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-md text-white p-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors z-30"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  currentSlide === index ? 'bg-[#D4AF37] w-10' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;