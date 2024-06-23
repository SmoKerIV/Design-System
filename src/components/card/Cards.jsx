// src/components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Card = ({ title, path, img }) => {
  return (
    <div className="card">
      <Link to={path} className="card-link">
        <div className="card-content">
          <div className="title-container">
            <h3 className="title">{title}</h3>
          </div>
          <div className="img-container">
            <img src={img} alt={title} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
