import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../NavBar/nav.module.css'



//import SearchBar from "../SearchBar"


function NavBar() {


  
    return (
        <div className= {style.navBar}>
            <NavLink  className= {style.link}  to= "/Home">Home</NavLink>
            <NavLink  className= {style.link}  to="/create">Created Videogame</NavLink>
        </div>
    )
};

export default NavBar;