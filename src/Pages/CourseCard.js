// CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, image, to }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <div className="course-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="see-more-container">
        <Link to={to} className="see-more-link">
          See More
        </Link>
      </div>

      </div>
    </div>
  );
};

export default CourseCard;
