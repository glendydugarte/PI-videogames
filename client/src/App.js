
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import axios from 'axios';
import { useState } from 'react'
import Detail from './Components/Detail';
import Cards from './Components/Cards';
import Nav from './Components/Nav';


function App() {

  const [videogames, setVideogames] = useState([]);
  const location= useLocation()

  function onSearch(name) {

    axios(`https://api.rawg.io/api/games?search=${name}`).then(({ data }) => {
      if (data.results.length > 0) {
        setVideogames((oldVideogames) => [...oldVideogames, ...data.results]);
      } else {
        window.alert('¡Not Found the Videogame!');
      }
    }).catch(error => {
      console.error(error);
    });
  }
   /* axios(`https://api.rawg.io/api/games?search=${name}`).then(({ data }) => {
       if (data.name) {
          setVideogames((oldVideogames) => [...oldVideogames, data]);
       } else {
          window.alert('¡Not Found the Videogame!');
       }
    })}*/
    
    function onClose(id) {
      setVideogames(videogames.filter((vg) => vg.id !== id))
   }


  return (
    <div className="App">
      {location.pathname !== "/" ? (  <Nav onSearch={onSearch} />
        ) : (
          ""
        )}
    <Routes>
      <Route path="/" element= {<LandingPage/>} />
      <Route path="/home" element= {<Cards videogames={videogames} onClose={onClose}/>} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
    </div>
  );
}

export default App;
