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
    <div> Back
        <Link to= "/home">
            <button> Back</button>
        </Link>
            { 
            videogame.name ? ( <div>
        <h2>{id}</h2>
        <h2>{videogame.name}</h2>
        <img src={videogame.background_image} alt=""/>
        <h2>Genres</h2>
        <ul>
        {videogame.genre?.map((genre, index) => (
  <div key={index}>
    <h3>{genre.name}</h3>
    <p>Id: {genre.id}</p>
    <p>Slug: {genre.slug}</p>
    <p>Games Count: {genre.games_count}</p>
    <img src={genre.image_background} alt="Genre background"/>
  </div>
))}
        </ul>
        <p>Description: {cleanDescription(videogame.description)}</p>
        <h2>Released Date: {videogame.released}</h2>
        <h2>{videogame.rating}</h2>
        <h2>Platforms</h2>
        <ul>
        {videogame.platforms?.map((elem, index)=>(
            <li key={index}>{elem}</li>
        ))}
        </ul>    
    </div>) : (<p>Loading...</p>)

            }  
            </div>
            );
}
export default Detail;