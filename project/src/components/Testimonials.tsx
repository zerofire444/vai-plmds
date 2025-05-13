import React from 'react';
import { useInView } from '../hooks/useInView';

interface TestimonialProps {
  quote: string;
  author: string;
  delay: number;
  inView: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, delay, inView }) => {
  return (
    <div 
      className={`bg-black/40 backdrop-blur-md p-8 rounded-lg border border-gray-800 transition-all duration-700 hover:border-[#D4AF37] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-[#D4AF37] text-5xl font-serif mb-4">"</div>
      <p className="text-gray-200 mb-6 italic">
        {quote}
      </p>
      <p className="text-white font-semibold">
        {author}
      </p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const testimonials = [
    {
      quote: "Sangaletti Construction did a great job on our kitchen replacing a very old backsplash with a beautiful new one. Dionathan is very responsive and has a high attention to detail and does beautiful work. We are so happy we chose them to do the job and look forward to working with them again. I highly recommend them.",
      author: "Erika Boyles"
    },
    {
      quote: "Mr Sangaletti did an awesome job with remodeling my guest bathroom. He is dedicated to providing exceptional and outstanding service and workmanship . He is respectful and considerate of my home and family . Really love my bathroom Thank you Sangaletti Construction",
      author: "Glen Parmanand"
    },
    {
      quote: "Dionathan did an incredible job with my floors. He worked around our recently moved in home with furniture already in place and did it with such patience and grace. He is so kind and works extremely well and diligently. We can't wait to hire him for our other upcoming projects. I recommend him to everyone I know - he's the best!",
      author: "Andrea Salas"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-black" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="text-[#D4AF37]">Clients</span> Say
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              delay={index * 200}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;