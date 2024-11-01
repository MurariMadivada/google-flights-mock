// src/components/AirportSearch.js
import React, { useState } from 'react';
import { searchAirports } from '../apiService';

const AirportSearch = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchAirports(query);
    setResults(data);
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search airport..." />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((airport) => (
          <li key={airport.entityId} onClick={() => onSelect(airport)}>
            {airport.presentation.suggestionTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AirportSearch;
