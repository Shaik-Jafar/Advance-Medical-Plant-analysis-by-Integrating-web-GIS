import React, { useState, useEffect } from 'react';
import axios from '../axios';
import MapSlideshow from './MapSlideshow';
import '../assets/css/MapCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ZOOM_LEVEL = 12; // Define zoom level as a constant

const MapCarousel = ({ title }) => {
  const [locations, setLocations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('api/locations/search', {
          params: { name: title }
        });
        setLocations(response.data);
        setLoading(false);
        setError(false); // Reset error state if locations are found
      } catch (error) {
        console.error('Error fetching locations:', error);
        setLoading(false);
        setError(true); // Set error state if fetch fails
      }
    };

    if (title) {
      fetchLocations();
    } else {
      setLoading(false); // If no title, set loading to false
    }
  }, [title]); // Dependency on title to refetch locations when title changes

  useEffect(() => {
    // Reset currentIndex if locations change
    setCurrentIndex(0);
  }, [locations]); // Dependency on locations to reset currentIndex

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return (
      <div className="text-center mt-5 text-black">
        <h5>Loading...</h5>
        {/* You can add a spinner or any loading animation here */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-black">
        <h5>Error fetching locations. Please try again later.</h5>
        {/* Handle error case */}
      </div>
    );
  }

  if (locations.length === 0) {
    return (
      <div className="text-center mt-5 text-black">
        <h5>No locations found for "{title}".</h5>
        {/* Handle case where no locations are found */}
      </div>
    );
  }

  // Ensure currentIndex is within bounds
  const currentLocation = locations[currentIndex];

  return (
    <div>
      {currentLocation && (
        <MapSlideshow
          location={currentLocation}
          zoom={ZOOM_LEVEL} // Pass zoom level as prop
        />
      )}
      {locations.length > 1 && (
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-primary" onClick={handlePrev}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MapCarousel;
