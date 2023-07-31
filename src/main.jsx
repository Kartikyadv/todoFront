import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./styles/app.scss";
import { createContext } from "react";

export const server = "https://todoback-ngfc.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loader,setLoader] = useState(false);
  const [user,setUser] = useState(false);

  return (
    <Context.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      loader,
      setLoader,
      user,
      setUser,
    }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
