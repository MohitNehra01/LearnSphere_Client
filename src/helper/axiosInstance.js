import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/api/v1`

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
