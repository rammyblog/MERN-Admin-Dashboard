import React from 'react';
import { UserProvider } from './context/userState/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from './routes';
import { AuthProvider } from './context/auth/AuthContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <AuthProvider>
          <BaseRoute />
        </AuthProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
