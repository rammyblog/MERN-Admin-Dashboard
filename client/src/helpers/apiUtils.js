import axios from 'axios';

const mernDashApi = axios.create({});

mernDashApi.interceptors.request.use(function (config) {
  console.log('Request Sent');
  const token = localStorage.getItem('mern_admin_dashboard');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default mernDashApi;
