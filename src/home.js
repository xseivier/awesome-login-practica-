import React, {useState} from 'react';
import { Link } from "react-router-dom";
// import Register from './components/register';
// import Login from './components/login';
// import Dash from './components/dashboard'
import './App.css';

const Home = () =>  {

  return(
<div className='container-fluid'> 
   <div className='login'>
     <h1>MasterLogger</h1>
     
  <div className='botones'>
     <Link to={{
    pathname: "/logIn",
    state: { fromDashboard: true } }} ><button className='btn btn-primary btn-lg'>Log In</button></Link>

    <p> or </p>

       <Link  to='/register' ><button className='btn btn-primary btn-lg' >Register</button></Link>
  </div>     
        
   </div>

</div> 
  )

}

export default Home;
