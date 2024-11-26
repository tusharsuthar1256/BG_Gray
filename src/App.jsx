import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx"
import Editior from './pages/editior.jsx';
import Signup from './pages/signup.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx';
import PublicRoute from './utils/PublicRoute.jsx';
import Nav from './Components/Nav.jsx';
import { signOut } from "firebase/auth";
import { auth } from './utils/firebase.js';


function App() {

  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <>
    <Router>
        <Nav onclick={handleLogout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
            <Route path="/signup" element={<Signup />} />
          </Route>
        <Route element={<PrivateRoute />}>
            <Route path="/editior" element={<Editior />} />
          </Route>
        
        
      </Routes>
    </Router>
    </>
  )
}

export default App
