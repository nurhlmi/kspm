import axios from 'axios';

const baseURL = 'http://localhost:8000/api/';
// const baseURL = "http://api.kspm.org/api/";

axios.defaults.baseURL = baseURL;
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axios;
