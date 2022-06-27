import './App.css';
import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
    {user ? <Logout/> : <Login/>}
    </div>
  );
}

export default App;
