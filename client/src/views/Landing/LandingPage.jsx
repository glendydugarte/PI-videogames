import React from 'react'
import { NavLink } from 'react-router-dom'
import "./LandingPage.css"


 function Landing(){
    return (
        <div>
           <h1 className='TitleLanding'>¡Welcome to AppGames!</h1>
            <img className="ImageLanding" alt= ""
            src ="https://e7.pngegg.com/pngimages/429/526/png-clipart-super-nintendo-entertainment-system-video-game-consoles-retrogaming-nintendo-64-action-game-game-video-game.png"
            ></img> 

            <NavLink to = "/home">
            <button className = "botonHome">Home</button>
            </NavLink>

        </div>
    )
}
export default Landing;