import React from 'react';
import { useSelector} from 'react-redux';
import Card from '../Card/Card';
import "./CardsContainer.css"



function CardsContainer() {
   const {allVideogames} = useSelector(state => state)
  
   return (
      <div className='cardsContainer'>
        {allVideogames.map((videogame)=>
         <Card  
         key={videogame.id}
            id={videogame.id}
            name={videogame.name}
            genres= {videogame.genres}
            background_image={videogame.background_image}
            
          />
         
         )}
      </div>
   )
}

export default CardsContainer;





