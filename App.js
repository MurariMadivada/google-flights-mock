// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import './App.css'; // Importing the CSS file

const App = () => {
  const [flightResults, setFlightResults] = useState([]);

  return (
    <div>
      <Navbar />
      <FlightSearch onResults={setFlightResults} />
      {flightResults.length > 0 && <FlightResults results={flightResults} />}
    </div>
  );
};

export default App;
