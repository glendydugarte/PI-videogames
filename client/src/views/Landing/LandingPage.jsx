import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './LandingPage.module.css'


 function Landing(){
    return (
        <div className= {style.divLanding}>
            <div>
            <NavLink to = "/home">
            <button className = {style.bHome}>Home</button>
            </NavLink>
            </div>

        </div> 
    )
}
export default Landing;