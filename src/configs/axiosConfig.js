import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:8000/', // Replace with your API base URL
  timeout: 10000, // Adjust timeout as needed
});


export default instance;
