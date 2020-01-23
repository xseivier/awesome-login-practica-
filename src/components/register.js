import React, {useState, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Register = ({setUsers2, users2}) => {

  const [users,setUsers]=useState({}) 
  const [validar,setValidar]=useState(false)
  const [redi,setredi]=useState(false)

 useEffect(() => {
  
   if(Object.keys(users).length!==0 && validar === true){
    setUsers2(users)
    setredi(true)
   }
  

  },[users]);

  if(redi){
    Swal.fire({
      icon: 'success',
      title: 'Se ha registrado, inicia session para continuar',
      showConfirmButton: true,
    })
    return(
      <Redirect to='/logIn' />
    )
    
  }
 const handleClick = () => {
 const username = document.getElementById('username').value
 const password = document.getElementById('password').value

 if(username==='' || password===''){
  setValidar(false)
  Swal.fire('Por favor llena todos los campos')
} else {

 for (let index = 0; index < users2.length; index++) {
  if (users2[index].username!==username){
    setValidar(true)
    setUsers({
      username: username,
      password: password
    })
  }  else{
    setValidar(false)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Este usuario ya existe',
    })
  }
   
 }

}
   
  

  
      
 }
 
 return(
     <div className='container-fluid'>
         <div className='login'>
            
                <h3 className='subtitle'>Create a new user</h3>
                <div className='inputs'>
                <input type='text' placeholder='username' id='username' required/>
                <input type='password' placeholder='password' id='password' required/>
                </div>
                <button onClick={handleClick} className='btn btn-primary btn-lg'>Register</button>

                <p>Ya tienes cuenta? <Link to='./logIn'>Inicia session</Link></p>
            
         </div>
        {/*  <button onClick={()=>setUsers2(users)}>hola bb</button> */}
     </div>
 )
}

export default Register