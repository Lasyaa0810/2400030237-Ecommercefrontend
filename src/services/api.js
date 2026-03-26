import axios from "axios";

const API = axios.create({
  baseURL: "2400030237-ecommercebackend-production.up.railway.app/api"
});

export default API;
