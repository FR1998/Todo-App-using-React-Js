import React, {useState} from 'react';

const Form = ({Login, error}) => {
    const [details,setDetails] = useState({name:"",email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);

    }

    /*
    const login = () => {
    localStorage.setItem(details);
    navigate("/Table");
    }
    useEffect(() => {
        let login = localStorage.getItem(details);
        if(login){
      navigate("/Table");
        }
    });
     */

    return ( 
        <form 
       className='FormColor' onSubmit={submitHandler} >
            <div className='form-inner'>
                <h1>Login Form</h1>
                {(error!== "") ? (<div className='error'>{error}</div>) : ""}
                <div className="form-group1">
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group2">
                    <label htmlFor="email">Email  : </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className="form-group3">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div> <br/>
                <input className='btn btn-success' type="submit" value="Login"  />
            </div>
        </form>
     );
}
 
export default Form;
