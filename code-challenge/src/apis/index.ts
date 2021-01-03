// Libs
import { create } from 'apisauce';

// Create base URL
const API = create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
