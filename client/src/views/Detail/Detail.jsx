import {React, useEffect} from 'react'
import "./Detail.css"
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link} from 'react-router-dom'
import { cleanDetail, getDetails } from '../../redux/actions'
 
function cleanDescription(str) {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }

 function Detail(){
    const {id}= useParams();
    const dispatch = useDispatch();
    const videogame = useSelector((state)=> state.videogamesDetails);
    console.log(videogame)

    useEffect(()=>{
        dispatch(getDetails(id));
        return ()=>{
            dispatch(cleanDetail())
        }
    },[id, dispatch]);
    
    return ( 
    <div className="nameComponent">
        <h1 className="TitleLanding">Detail Videogame</h1>

        <Link to= "/home">
            <button className="botonHome">Back</button>
        </Link>
        {videogame.name ? ( <div>
        <h2 className="idDetail">{id}</h2>
        <h2 className="nameDetail">{videogame.name}</h2>
        <img className="imageDetail"src={videogame.background_image} alt=""/>
        
        <h2>Genres</h2>
        <ul className="genreContainer">
        {videogame.genre?.map((genre, index) => (
  <div key={index}>
    <h3 className="nameDetail">{genre.name}</h3>
    <p className="idDetail">Id: {genre.id}</p>
    <p className="idDetail">Slug: {genre.slug}</p>
    <p className="idDetail">Games Count: {genre.games_count}</p>
    <img className="imageDetail"src={genre.image_background} alt="Genre background"/>
  </div>
))}
        </ul>
        <p className="description">Description: {cleanDescription(videogame.description)}</p>
        <h2 className="nameDetail">Released Date: <p className="idDetail">{videogame.released}</p></h2>
        <h2 className="nameDetail">Rating: <p className="idDetail">{videogame.rating}</p></h2>
        <h2 className="nameDetail">Platforms</h2>
        <ul className="idDetail">
        {videogame.platforms?.map((elem, index)=>(
            <li className="platDetail" key={index}>{elem}</li>
        ))}
        </ul>    
    </div>) : (<p>Loading...</p>)      
}


           

         
            </div>)}
            
export default Detail;