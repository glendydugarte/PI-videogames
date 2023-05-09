import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination'
import style from '../CardsContainer/CardsContainer.module.css'




function CardsContainer() {
   const Games=  useSelector(state => state.allVideogames) 
  
   const [pagina, setPagina] = useState(1);
   const [porPagina, setPorPagina] = useState(15);
   const maximo = Games.length / porPagina



   return (
      <div className= {style.cardsContainer}>
        <div className={style.container}>{Games.slice((pagina - 1) * porPagina,
     (pagina -1) * porPagina + porPagina)
     .map((videogame)=>
         <Card  
         key={videogame.id}
            id={videogame.id}
            name={videogame.name}
            genres= {videogame.genres}
            background_image={videogame.background_image}
            
          />
          
         
         )}
         </div>
         <div>
         <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>
         </div>
      </div>
   )
}

export default CardsContainer;





