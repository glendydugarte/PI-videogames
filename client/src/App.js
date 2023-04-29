
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Detail, Form, Home,LandingPage, } from './views'
import  NavBar from './Components/NavBar/NavBar'


function App() {

  /*const [videogames, setVideogames] = useState([]);
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
    axios(`https://api.rawg.io/api/games?search=${name}`).then(({ data }) => {
       if (data.name) {
          setVideogames((oldVideogames) => [...oldVideogames, data]);
       } else {
          window.alert('¡Not Found the Videogame!');
       }
    })}
    
    function onClose(id) {
      setVideogames(videogames.filter((vg) => vg.id !== id))
   }*/

   const location= useLocation();

  return (
    <div className="App">
        {location.pathname !== "/" ? (  <NavBar/>
        ) : (
          ""
        )}
      
    
    <Routes>
      <Route path="/" element= {<LandingPage/>} />
      <Route path="/home" element= {<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/create" element={<Form />} />

    </Routes>
    </div>
  );
}

export default App;
