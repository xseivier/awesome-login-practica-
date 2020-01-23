import React, {useState, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const Login = ({users2, setUserAct}) => {
    const [user, setUser] =useState({
    })
    const [redi,setredi]=useState(false)

    

    useEffect(() => {
  
        if(Object.keys(user).length!==0){
            console.log(user)

            let usuarionone = true

            for (let index = 0; index < users2.length; index++) {
                if(user.usernameLog === users2[index].username && user.passwordLog === users2[index].password){
                    setredi(true)
                    usuarionone= true
                    break
                } else  {
                    usuarionone= false
                }
                                 
             }  

             if(!usuarionone){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Datos incorrectos',
                  })
             }

             setUserAct(user)
        }
       },[user]);

       if(redi){
        Swal.fire({
            icon: 'success',
            title: user.usernameLog + ' Ha iniciado session correctamente',
            showConfirmButton: false,
            timer: 2000
          })
        return(
          <Redirect to='/dashboard' />
        )}

        
 
    const handleClick = () => {
        const usernameLog = document.getElementById('usernameLog').value
        const passwordLog = document.getElementById('passwordLog').value
    
        if(usernameLog==='' || passwordLog===''){
            Swal.fire('Por favor llena todos los campos')
        } else {
        setUser(
            {usernameLog: usernameLog, passwordLog: passwordLog}
        )}
    }


    
 return(
     <div className='container-fluid'>
         <div className='login'>
            
                <h3 className='subtitle'>Login</h3>
                <div className='inputs'>
                <input type='text' placeholder='username' id='usernameLog' required/>
                <input type='password' placeholder='password' id='passwordLog' required/>
                </div>
                <button onClick={handleClick} className='btn btn-primary btn-lg'>Log In</button>

                <p>No tienes cuenta aun? <Link to='./register'>Registrate</Link></p>
            
         </div>
     </div>
 )
}

export default Login