// src/components/FlightResults.js
import React from 'react';

const FlightResults = ({ results }) => (
  <div>
    <h2>Flight Results</h2>
    <ul>
      {results.map((flight, index) => (
        <li key={index}>
          {flight.origin} to {flight.destination} - ${flight.price}
        </li>
      ))}
    </ul>
  </div>
);

export default FlightResults;
