import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import Home from './secreens/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? <Home navigation={{ navigate: handleLogout }} /> : <LoginScreen navigation={{ navigate: handleLogin }} />}
    </>
  );
}

export default App;
