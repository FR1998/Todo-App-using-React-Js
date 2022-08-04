import React from 'react'
import { Navigate} from 'react-router-dom';
 


const PrivateRoute = (props) => {
    const {Component} = props;
    const token = localStorage.getItem('token');
    if(token === "randomValue"){
        <Navigate to="/Table" />
        return (<Component />);
    
      }
      else {
      return  <Navigate to="/" />
      }

      
}
 
export default PrivateRoute;