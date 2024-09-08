import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import MapCarousel from './MapCarousel';
import { CardMedia } from '@mui/material';
import Barline from './BarLine'; // Import Barline component
import '../assets/css/CardDetails.css'; // Import your custom CSS for CardDetails styling

function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    axios.get(`/api/plantdetails/${id}`)
      .then(response => {
        setPlant(response.data);
      })
      .catch(error => {
        console.error('Error fetching plant details:', error);
      });
  }, [id]);

  if (!plant) {
    return <div>ERROR</div>;
  }

  return (
    <div className="card-details-container">
      <h1>{plant.title}</h1>
      <div className="plant-details-image">
        <CardMedia className='plant-image'
          component="img"
          width={100}
          image={plant.image}
          alt={plant.title}
        />
      </div>
      <div className="card-details-content">
        <h2>Description</h2>
        <p>{plant.description}</p>

        <h2>Barline Graph</h2>
        <Barline dataPoints={plant.dataPoints} />
        
        {/* Pass title as prop to MapCarousel */}
        <MapCarousel title={plant.title} />
      </div>
    </div>
  );
}

export default PlantDetails;
