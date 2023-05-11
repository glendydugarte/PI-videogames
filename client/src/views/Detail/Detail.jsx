import {React, useEffect} from 'react'
import style from  './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink} from 'react-router-dom'
import { cleanDetail, getDetails } from '../../redux/actions'
 


 function Detail(){
    const {id}= useParams();
    const dispatch = useDispatch();
    const videogame = useSelector((state)=> state.videogamesDetails);
 


    useEffect(()=>{
        dispatch(getDetails(id));
        return ()=>{
            dispatch(cleanDetail())
        }
    },[id, dispatch]);

    function cleanDescription(str) {
      return str.replace(/<\/?[^>]+(>|$)/g, "");
    }
    
    return ( 
    <div className={style.nameComponent}>
        <h1 className={style.TitleLanding}>Detail Videogame</h1>
        { 
            videogame.name ? ( <div>
        <h2 className= {style.idDetail}>{id}</h2>
        <h2 className={style.nameDetail}>{videogame.name}</h2>
        <img className= {style.imageDetail}src={videogame.background_image} alt=""/>
        
        <h2 className={style.genreTitle}>Genres</h2>
        <ul className= {style.genreContainer}>
        { !videogame.created ? 
        videogame.genre?.map((genre, index) => (
  <div key={index}>
    <h3 className= {genre.name}></h3>
    <p className={style.idDetail}>Id: {genre.id}</p>
    <p className={style.idDetail}>Slug: {genre.slug}</p>
    <p className={style.idDetail}>Games Count: {genre.games_count}</p>
    <img className={style.imageDetail}src={genre.image_background} alt="Genre background"/>
  </div>
)) : (
    <div>
      {videogame.genres?.map((genres, index) => (
        <div key={index}>
          <h3 className={style.nameDetail}>{genres.name}</h3>
        </div>
      ))}
    </div>
  )}
       </ul>
        <p className= {style.description}>Description: {cleanDescription(videogame.description)}</p>
        <h2 className={style.nameDetail}>Released Date: <p className={style.idDetail}>{videogame.released}</p></h2>
        <h2 className={style.nameDetail}>Rating: <p className={style.idDetail}>{videogame.rating}</p></h2>
        <h2 className={style.nameDetail}>Platforms</h2>
        <ul className={style.idDetail}>
        {videogame.platforms?.map((elem, index)=>(
            <li className= {style.platDetail} key={index}>{elem}</li>
        ))}
        </ul>    
    </div>) : (<p>Loading...</p>)
     
}
        <NavLink to= "/home">
            <button className={style.back}>Back</button>
        </NavLink>



           

         
            </div>)}
            
export default Detail;