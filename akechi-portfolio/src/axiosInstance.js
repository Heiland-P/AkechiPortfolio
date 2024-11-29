import axios from 'axios';
import config from './Config';

const instance = axios.create({
  baseURL: config.backendUrl,
  timeout: Number.MAX_SAFE_INTEGER, // Set timeout to 10 seconds (10000 milliseconds)
});

export default instance;