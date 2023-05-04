
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Detail, Form, Home, LandingPage, NotFound } from './views'
import  NavBar from './Components/NavBar/NavBar'


function App() {


   const location= useLocation();

  return (
    <div className="App">
        {location.pathname !== "/" ? ( <NavBar/>) : ("")}
      
    <Routes>
      <Route path="/" element= {<LandingPage/>} />
      <Route path="/home" element= {<Home />} />
      <Route path="/videogames/:id" element= {<Detail />} />
      <Route path="/create" element={<Form />} />
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </div>
  );
}

export default App;
