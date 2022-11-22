import axios from 'axios'

const api = axios.create({ baseURL: 'http://cryptobank.local:8180'})

// api.interceptors.request.use(async config => {

// const token = getToken();
// if (token) {
//   config.headers.Authorization = `Bearer ${token}`;
// }
// return config;
// });



export default api;