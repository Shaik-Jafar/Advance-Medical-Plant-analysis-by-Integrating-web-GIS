import React from 'react';
import { Link } from 'react-router-dom';

function PlantCard({ plant }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        {plant.image ? (
          <img src={plant.image} className="card-img-top" alt={plant.title} />
        ) : (
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>{plant.title}</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{plant.title}</text></svg>
        )}
        <div className="card-body">
          <h5 className="card-title">{plant.title}</h5>
          <p className="card-text">{plant.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/plant/${plant._id}`} className="btn btn-sm btn-outline-secondary">View</Link>
            </div>
            <small className="text-muted">{plant.date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
