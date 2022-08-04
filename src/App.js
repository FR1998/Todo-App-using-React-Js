import "./App.css";
import React from "react";
import LoginForm from './components/loginForm';
import Table from "./components/table";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import PrivateRoute from "./components/private";

 
function App(){


  
  
    return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/Table" element={<PrivateRoute Component={Table}   /> }   />
      </Routes>
    </Router>
      
      
    );
    
  }
  

export default App;
