
import style from  './Home.module.css';
import { React, useEffect, useState } from 'react';
import { filterCreated, filterVideogamesByGenre, getGenres, getVideogames, orderByName, orderByRating } from '../../redux/actions';
import { useDispatch, useSelector} from 'react-redux';
import CardsContainer from '../../Components/CardsContainer/CardsContainer';
import SearchBar from '../../Components/SearchBar/SearchBar'





function Home() {

  const dispatch = useDispatch()
    const genres = useSelector((state) => state.allGenres);
    //const allGames = useSelector((state) => state.allVideogames)
    const [order, setOrder] = useState("");

  
 useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    }, [dispatch])

    function handleSort(p) {
        p.preventDefault();
        dispatch(orderByName(p.target.value)); //despacho la accion
        //setCurrentPage(1)
        setOrder(`Ordenado ${p.target.value}`); //es un estado local vacio, lo uso para modif estado local y renderize
      }
    

    function handleFilterGamesByGenre(event) {
        event.preventDefault();
        dispatch(filterVideogamesByGenre(event.target.value));
        console.log(event.target.value)
      }
      function handleSortRating(p) {
        p.preventDefault();
        dispatch(orderByRating(p.target.value)); //despacho la accion
       // setCurrentPage(1);
        setOrder(`Ordenado ${p.target.value}`); //es un estado local vacio, lo uso para modif estado local y renderize
      }

      function handlefilterCreated(event) {
        event.preventDefault();
        dispatch(filterCreated(event.target.value));
      }
    
      function handleClick(event) {
        window.location.reload();
      }

    return (

        <div>
            <h1 className= {style.TitleLanding}>¡Videogames App!</h1>
            <SearchBar></SearchBar>
            <button className={style.selectB}  onClick={(event) => handleClick(event)}>
            Reload
          </button>

            <select
              defaultValue={"DEFAULT"}
              className= {style.select}
              onChange={(p) => handleSort(p)}
            >
              <option value="DEFAULT" disabled>
                In alphabetical order
              </option>
              <option value="asc"> A-Z</option>
              <option value="desc"> Z-A</option>
            </select>

            <select
              defaultValue={"DEFAULT"}
              className={style.select}
              onChange={(p) => handlefilterCreated(p)}
            >
              <option value="DEFAULT" disabled>
                Show Games
              </option>
              <option value="all">All games</option>
              <option value="api">From API</option>
              <option value="created">Created</option>
            </select>


            <select
              defaultValue={"DEFAULT"}
              className={style.select}
              onChange={(p) => handleSortRating(p)}
            >
              <option value="DEFAULT" disabled>
                Rating
              </option>
              <option value="ls">Low Score</option>
              <option value="hs">High Score</option>
            </select>

            <select
              defaultValue={"sinFiltro"}
              className={style.select}
              onChange={(event) => handleFilterGamesByGenre(event)}
            >
              <option value="sinFiltro">Genres</option>
              Genres :{" "}
              {genres?.map((event, i) => {
                return (
                  <option value={event.name} key={i}>
                    {" "}
                    {event.name}{" "}
                  </option>
                );
              })}
            </select>
            <CardsContainer></CardsContainer>
         

        </div>
        
    )
}


  export default Home;