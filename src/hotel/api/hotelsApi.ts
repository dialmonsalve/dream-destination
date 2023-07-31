import axios from 'axios';

export const hotelsApi = axios.create({
  baseURL:'http://localhost:8000/hotels'
});


export const roomsApi = axios.create({
  baseURL:'http://localhost:8000/rooms'
})