import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
//import SearchBar from "../SearchBar"


function NavBar() {
    return (
        <div className= "navBar">
            <NavLink className="link" to= "/Home">Home</NavLink>
            <NavLink className="link" to="/create">Created Videogame</NavLink>

            <select className='select'>
              <option>In alphabetical order</option>
              <option> A-Z</option>
              <option> Z-A</option>
            </select>

            <select>
              <option> Show Games </option>
              <option>All games</option>
              <option>From API</option>
              <option>Created</option>
            </select>

            <select>
              <option> Rating</option>
              <option>Low Score</option>
              <option>High Score</option>
            </select>

        </div>
    )
};

export default NavBar;