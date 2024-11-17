import React from 'react';
import QuotesIcon from '../assets/images/quotes-icon.svg';
import StarRating from './StarRating';

const Testimonial = ({ item }) => {
  return (
    <div className="quotes-box">
      <img className="quotes-icon" src={QuotesIcon} alt="" />
        <div className="stars">
        <StarRating starRating={item.starRating} />
        </div>
      <p>{item.comment}</p>
      <img className="icon" src={item.avatarUrl} alt={item.author} />
      <p className="client-name">{item.author}</p>
      <p className="client-className">{item.jobRole}</p>
    </div>
  );
};

export default Testimonial;