import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID hGrM9BpqfJ-_2kN7c65OyrNKLz_MOms2Ge9igkAKh0Y'
  }
});