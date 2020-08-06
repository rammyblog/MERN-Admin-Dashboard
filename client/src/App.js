import React from 'react';
import SiderDemo from './components/dashboard/Sidebar';
import { UserContext, UserProvider } from './context/userState/userContext';

function App() {
  return (
    <UserProvider>
      <SiderDemo />
    </UserProvider>
  );
}

export default App;
