// src/components/FlightSearch.js
import React, { useState } from 'react';
import { searchFlights } from '../apiService';

const FlightSearch = ({ onResults }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = async () => {
    if (origin && destination && date) {
      console.log("Search parameters:", { origin, destination, date });
      const params = {
        originSkyId: origin,
        destinationSkyId: destination,
        date,
      };
      const results = await searchFlights(params);
      console.log("Flight search results:", results); // Log results for debugging
      onResults(results); // Pass results to App.js
    } else {
      console.log("Please fill all search fields.");
    }
  };

  return (
    <div>
      <h2>Flight Search</h2>
      <input
        type="text"
        placeholder="Origin Airport Code"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination Airport Code"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search Flights</button>
    </div>
  );
};

export default FlightSearch;
