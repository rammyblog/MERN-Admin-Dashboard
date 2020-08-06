import React, { useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SiderDemo from './components/dashboard/Sidebar';

function App() {
  const fetchUsers = useCallback(async () => {
    try {
      const res = await axios.get('/api/user/');
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);
  return <SiderDemo />;
}

export default App;
