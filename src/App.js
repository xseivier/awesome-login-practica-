import React, {Fragment,useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import Dash from './components/dashboard'
import Home from './home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'



const App = () =>  {
  const [users2,setUsers2]=useState([{username: 'admin' , password: '123'}]) 
  
  const [userAct, setUserAct]=useState('nada')

  const pusheaEluserbb=(value)=>{
let aux=[...users2]
aux.push(value)
setUsers2(aux)
  }

console.log('users2',users2)
  return(
   <Fragment>
     
     <Router>
     
     

     {/* <Link to={{
    pathname: "/logIn",
    state: { fromDashboard: true } }} ><button>Log In</button></Link>

       <Link  to={{
    pathname: "/register",
    state:'setUsers'  }}  ><button>Register</button></Link> */}

    
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/"  >
            <Home/>
          </Route>
          <Route exact path="/register"  >
              <Register setUsers2={pusheaEluserbb} users2={users2}/>
          </Route>
     
          <Route path="/logIn">
           <Login users2={users2} setUserAct={setUserAct}/>
          </Route>

          <Route path="/dashboard">
            <Dash userAct={userAct}/>
          </Route>
        </Switch>
      
    </Router>
   </Fragment>
  )

}

export default App;
