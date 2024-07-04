import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://ergast.com/api/f1',
});

export default api;
