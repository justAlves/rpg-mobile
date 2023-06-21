import axios from "axios";

const api = axios.create({
  baseURL: "https://rpg-backend-production.up.railway.app:3000",
});

export default api;
