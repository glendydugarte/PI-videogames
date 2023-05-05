import React from 'react'
import { NavLink } from 'react-router-dom'
import "./LandingPage.css"


 function Landing(){
    return (
        <div>
           <h1 className='TitleLanding'>¡Welcome to AppGames!</h1>
            <NavLink className ="botonHome" to = "/home">
            <button className ="botonHome">Home</button>
            </NavLink>

        </div>
    )
}
export default Landing;