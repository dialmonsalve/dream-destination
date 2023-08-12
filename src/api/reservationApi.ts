import axios from "axios";

export const reservationApi = axios.create({
  baseURL:'http://localhost:8000/reservation'
})