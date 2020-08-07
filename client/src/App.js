import React from 'react';
import { UserProvider } from './context/userState/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from './routes';

function App() {
  return (
    <Router>
      <UserProvider>
        <BaseRoute />
      </UserProvider>
    </Router>
  );
}

export default App;
