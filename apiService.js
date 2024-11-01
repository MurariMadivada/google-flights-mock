// src/apiService.js
import axios from 'axios';

const API_KEY = 'd47c42c947msh335036a491b3d02p105bbbjsn74d22226d341';
const BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
  },
});

// Function to search flights
export const searchFlights = async ({ originSkyId, destinationSkyId, date }) => {
  try {
    const response = await apiService.get('/searchFlights', {
      params: { originSkyId, destinationSkyId, date },
    });
    console.log("API Response:", response.data.data); // Log API response for debugging
    return response.data.data;
  } catch (error) {
    console.error("API Error:", error.response || error.message);
    if (error.response && error.response.status === 403) {
      console.error("Authorization error: Please check your API key and permissions.");
    }
    return []; // Return an empty array on error
  }
};

// Function to search for nearby airports
export const getNearbyAirports = async (lat, lng) => {
  try {
    const response = await apiService.get('/getNearByAirports', {
      params: { lat, lng }
    });
    console.log("Nearby Airports:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Nearby Airports Error:", error.response || error.message);
    if (error.response && error.response.status === 403) {
      console.error("Authorization error: Please check your API key and permissions.");
    }
    return [];
  }
};
