
//import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import React from 'react';
import style from '../Card/card.module.css'

function Card({id, name, background_image, genres}) { 
    
    return ( 
    <div className={style.presentacionCard}>
      <div> 
      <NavLink className={style.link} to={`/videogames/${id}`} >
       <h2 className={style.name}>{name}</h2>
    </NavLink>
      </div>
      <div className={style.imageDiv} >
      <img className={style.image} src={background_image} alt={name} /> 
      </div>
    
   <div>
   {Array.isArray(genres) && genres.length > 0 ?
        genres.map((elem, index) => <h5 key={index}>{elem}</h5>)
        :
        <p>No genres available</p> }
   </div>
   
    </div>
    )
       }

       export default Card;