import React from 'react'
import { NavLink } from 'react-router-dom'
import "./LandingPage.css"


 function Landing(){
    return (
        <div className='divLanding'>
           <h1 className='TitleLanding'>¡Welcome to AppGames!</h1>
            <NavLink to = "/home">
            <button className ="botonHome">Home</button>
            </NavLink>

        </div>
    )
}
export default Landing;