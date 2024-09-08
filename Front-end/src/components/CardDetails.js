// CardDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Barline from './Barline';
import PlantDetails from './PlantDetails'; // Import PlantDetails
import { CardMedia } from '@mui/material';


function CardDetails() {
  const { id } = useParams();

  // Find the card with the matching id (use strict equality)
  const card = cardsData.find(card => card.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="card-details-container">
      <h1>{card.title}</h1>
      <div className="card-details-image">
        <CardMedia
          component="img"
          width={100}
          image={card.image}
          alt={card.title}
        />
      </div>
      <div className="card-details-content">
        <h1> Medical Properties</h1>
        <p>{card.description}</p>

        <h1>Yearly Analysis</h1>
        <Bargraph />
        <Barline />

        <h1>Plant Details</h1>
        <PlantDetails /> {/* Render PlantDetails component */}
      </div>
    </div>
  );
}

export default CardDetails;
