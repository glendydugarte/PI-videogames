import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
//import SearchBar from "../SearchBar"


function NavBar() {
    return (
        <div className= "navBar">
            <Link to= "/Home">HOME</Link>
            <Link to="/create">FORM</Link>
        </div>
    )
};

export default NavBar;