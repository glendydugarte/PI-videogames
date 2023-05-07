import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'



//import SearchBar from "../SearchBar"


function NavBar() {


  
    return (
        <div className= "navBar">
            <NavLink className="link" to= "/Home">Home</NavLink>
            <NavLink className="link" to="/create">Created Videogame</NavLink>
        </div>
    )
};

export default NavBar;