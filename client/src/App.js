import React from 'react';
import SiderDemo from './components/dashboard/Sidebar';
import { UserContext, UserProvider } from './context/userState/userContext';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}

export default App;
