import axios from "axios";

const baseUrl =  "http://34.95.197.208:8000/api/" 

export const customAxios = axios.create({
  baseURL: baseUrl,
});

