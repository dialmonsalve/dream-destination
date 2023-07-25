import axios from 'axios';

const hotelsApi = axios.create({
  baseURL:'http://localhost:8000/hotels'
});

export default hotelsApi