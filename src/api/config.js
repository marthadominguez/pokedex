import axios from "axios";

const URL = process.env.POKEAPI || "https://pokeapi.co/api/v2/"

// Creamos una instancia de Axios
const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default axiosInstance;