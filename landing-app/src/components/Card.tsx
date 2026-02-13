import React from 'react';
import './Card.css';

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string; // Optional prop for an image
  onClick?: () => void; // Optional click handler
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;