import axios from 'axios';

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/';

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
