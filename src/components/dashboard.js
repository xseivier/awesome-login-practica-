import React, { Fragment } from 'react'
import Navbar from './navbar'
import {Redirect} from 'react-router-dom'

const Dash = ({userAct}) => {
    const {usernameLog, passwordLog} = userAct
    const datos = [
        {
            Name: 'Nombre de Noticia',
            description: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
            Name: 'Nombre de Noticia',
            description: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
            Name: 'Nombre de Noticia',
            description: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
            Name: 'Nombre de Noticia',
            description: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
            Name: 'Nombre de Noticia',
            description: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
            Name: 'Nombre de Noticia',
            description: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
            Name: 'Nombre de Noticia',
            description: 'Some quick example text to build on the card title and make up the bulk of the card'
        }
    ]

    const cartas = datos.map((carta, key) => {
        return (
            
              <div className="card mb-4" key={key} style={{width: '38rem'}}>
                
                <div className="card-body">
        <h5 className="card-title">{carta.Name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ver mas</a>
                </div>

                
              </div>
        )
    })

    return (userAct === 'nada' ? <Redirect to='/logIn' /> :
    <Fragment>
        <Navbar/>
        <div className='dash'>
          <div className='row'>
          <div className='ml-5 col-5'>
            <div className='card' style={{width: '38rem'}}> 
            <div className='card-body'>
<h5 className="card-title">Bienvenido {usernameLog}</h5>
            <p className="card-text">Esta es tu seccion de noticas</p>
            </div>
            </div>
            
          </div>
          <div className='col-6'>
              {cartas}
            </div>
          </div>
          


        </div>
    </Fragment>
    )
}

export default Dash