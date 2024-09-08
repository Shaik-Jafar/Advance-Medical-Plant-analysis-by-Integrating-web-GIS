import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantList from './components/PlantList';
import PlantDetails from './components/PlantDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<PlantList/>} />
          <Route path="/plantdetails/:id" element={<PlantDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
