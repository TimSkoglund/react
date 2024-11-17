import { useState, useEffect } from 'react';
import QuotesIcon from '../assets/images/quotes-icon.svg';
import RatingStars from '../assets/images/rating-stars.svg';
import FannieIcon from '../assets/images/fannie-icon.svg';
import AlbertIcon from '../assets/images/albert-icon.svg';
import Testimonial from './Testimonial';

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
    const data = await res.json(); // Fixad typo
    setTestimonials(data);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section id="clients">
      <div className="container">
        <h2 className="client-h2">Clients are Loving Our App</h2>
        <div className="quotes-box">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} item={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;