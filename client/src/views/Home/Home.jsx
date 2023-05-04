
import "./Home.css";
import { React, useEffect } from 'react';
import { getVideogames } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import CardsContainer from '../../Components/CardsContainer/CardsContainer';
import SearchBar from '../../Components/SearchBar/SearchBar'
//import Pagination from '../../Components/Pagination/Pagination'



function Home() {
 
    const dispatch = useDispatch()
   
 
 useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch])


    return (

        <div>
            <h1 className='TitleLanding'>¡HOME!</h1>
            <SearchBar></SearchBar>
            <CardsContainer></CardsContainer>


        </div>
    )
}


  export default Home;