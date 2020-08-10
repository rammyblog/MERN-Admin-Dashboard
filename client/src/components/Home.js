import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
function Home() {
  let history = useHistory();
  useEffect(() => {
    history.push('/dashboard');
    // <Redirect to="/dashboard" />;
    // window.location.re('/dashboard');
  }, []);
  return <>{/* <Redirect to="/dashboard" /> */}</>;
}

export default Home;
