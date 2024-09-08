import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios'; // Ensure this path is correct
import "../assets/css/navbar.css"
function PlantList() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/plantdetails')
      .then(response => {
        setPlants(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('There was an error fetching the plants!');
        setLoading(false);
        console.error('There was an error fetching the plants!', error);
      });
  }, []);

  if (loading) return <p>Loading plants...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <nav className="  navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Plant Analysis</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
  </div>
</nav>
    <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Medical Plant Analysis</h1>
        <p className="lead text-body-secondary ">Explore our curated collection of exquisite plants, Each plant card provides a glimpse into its unique characteristics, with detailed information just a click away.</p>
        <p className=''>
          <a href="#" class="btn btn-primary my-2 m-2">Upload to scan</a>
          <a href="https://drive.google.com/file/d/1Li_ASeCQErXEBWakNAYLAfRH6nJDV1q4/view?usp=sharing" target='_blank' class="btn btn-secondary my-2">Download app</a>
        </p>
      </div>
    </div>
  </section>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {plants.length === 0 ? (
            <p>No plants found</p>
          ) : (
            plants.map(plant => (
              <div className="col" key={plant._id}>
                <div className="card shadow-sm">
                  <Link to={`/plantdetails/${plant._id}`}>
                    <img
                      src={plant.image}
                      className="bd-placeholder-img card-img-top"
                      alt={plant.title}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{plant.title}</h5>
                    <p className="card-text">{plant.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to={`/plantdetails/${plant._id}`} className="btn btn-sm btn-outline-secondary">View</Link>
                      </div>
                      <small className="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default PlantList;
