import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/1830144",
});

export default instance;
