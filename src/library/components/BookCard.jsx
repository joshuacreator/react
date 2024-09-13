import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ img, title, author, year, key }) => {
  return (
    <Link to={`/book/${key}`} className="card">
      <img className="card-img-top" src={img} alt={title} />
      <div className="card-body">
        <h5 className="card-text">{title}</h5>
        <div className="book-info-row">
          <p className="card-text">by {author}</p>
          <p className="card-text">Year: {year}</p>
        </div>
      </div>
    </Link>
  );
};
