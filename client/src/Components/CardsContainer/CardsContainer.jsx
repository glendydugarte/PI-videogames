
import { useSelector} from 'react-redux';
import Card from './Components/Card/Card';


function CardsContainer() {
   const {allVideogames} = useSelector(state => state)
   return (
      <div>
        {allVideogames.map((videogame)=>
         <Card
            id={videogame.id}
            name={videogame.name}
            genres={videogame.genres}
            image={videogame.image}
          
               />
         )}
      </div>
   )
}

export default CardsContainer;