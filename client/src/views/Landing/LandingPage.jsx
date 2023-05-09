import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './LandingPage.module.css'


 function Landing(){
    return (
        <div className= {style.divLanding}>
            <div>
            <h1 className= {style.welcome}>¡Welcome to AppGames!</h1>
            </div>
          
            <NavLink to = "/home">
            <button className = {style.bHome}>Home</button>
            </NavLink>

        </div> 
    )
}
export default Landing;