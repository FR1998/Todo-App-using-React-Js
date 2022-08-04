import React, {useState } from 'react'
import Form from './form';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [user,setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const adminUser = {
    email: "faizan_raza16@gmail.com",
    password:"faizan123"

  }

  
  const Login = details => {
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password){
    console.log("Welcome");
    localStorage.setItem('token','randomValue');
   /* setUser({
      name: details.name,
      email: details.email,
      
    }) */
    navigate("/Table");
    
    
    } else {
      console.log("no entry");
      setError("Details do not match! Entry Denied")
    }

  };

  




  const Logout = () => {
    console.log("Logout");
    localStorage.removeItem('token');
    /*
    setUser({
      name:"",email:""
      
    })
    */
  };

  return ( 
    <div>
      {(user.email !== "") ? (
        <div>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button className='btn btn-warning' onClick={Logout}>Logout</button>
        </div>

      )  : (
        <Form Login={Login} error={error}  />
      )
      }
    </div>
   );
}
export default LoginForm;
