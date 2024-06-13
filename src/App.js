import './App.css';
import ToDoList from './ToDoList';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";  

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          {isAuthenticated && <h3 style={{ color: 'white' }}>HELLO "{user.name}"</h3>}
        </div>
        <div className="navbar-right">
          {isAuthenticated ? (
            <button 
              className="navbar-button logout" 
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          ) : (
            <button 
              className="navbar-button login" 
              onClick={() => loginWithRedirect()}
            >
              Login with redirect
            </button>
          )}
        </div>
      </nav>
      <ToDoList />
    </>
  );
}

export default App;
