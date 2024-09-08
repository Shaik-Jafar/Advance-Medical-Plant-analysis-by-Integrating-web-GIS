import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/MapSlideshow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapSlideshow = ({ location, zoom }) => {
  if (!location || !location.coordinates) {
    return null; // Handle case where location data is not available or incomplete
  }

  const { latitude, longitude } = location.coordinates;

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  return (
    <div className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={location.name}
          ></iframe>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="location"></h5>
          </div>
        </div>
      </div>
    </div>
  );
};

MapSlideshow.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired
  }),
  zoom: PropTypes.number.isRequired,
};

export default MapSlideshow;
