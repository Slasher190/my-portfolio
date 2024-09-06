import axios from "axios";

export const _ = axios.create({
  baseURL: "http://localhost:8000/location",
});
