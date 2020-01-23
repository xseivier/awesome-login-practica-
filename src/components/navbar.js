import React from 'react' 
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
       
        <div className='header'>

            <div>
            <h4>Awesome Login</h4>
            </div>

            <div className='nav'>
            <Link to='./'><button className='btn btn-primary'>Log out</button></Link>
            </div>

        </div>
        

        
    )
} 

export default Navbar