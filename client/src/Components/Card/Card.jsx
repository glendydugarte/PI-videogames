
//import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import React from "react";
import "./card.css"

function Card({id, name, background_image, genre}) { 
    
    return ( 
    <div className="presentacionCard">
      <div> 
      <NavLink className="navLink" to={`/videogames/${id}`} >
       <h2 className="name">{name}</h2>
    </NavLink>
      </div>
      <div className="imageDiv">
      <img className="image" src={background_image} alt={name} /> 
      </div>
    
   <div>
   {Array.isArray(genre) && genre.length > 0 ?
        genre.map((elem, index) => <h5 key={index}>{elem}</h5>)
        :
        <p>No genres available</p> }
   </div>
   
    </div>
    )
       }

       export default Card;