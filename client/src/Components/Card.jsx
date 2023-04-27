
//import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


function Card(props) { 
    const { id, name, genres, image, onClose } = props;
    return ( <div className="presentacionCard">
        
    <button className="botonX" onClick={()=>onClose(id)}>X</button>

    <NavLink to={`/detail/${id}`} >
       <h2 className="name">{name}</h2>
    </NavLink>
    <h2 claassName="infoGenres">{genres}</h2>
    <img className="image" src={image} alt="" /> 
    </div>
    )
       }

       export default Card;