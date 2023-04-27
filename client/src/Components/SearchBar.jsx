import React, { useState } from "react";



export default function SearchBar(props) {
   const [name, setName] = useState("");
   
   const handleChange = (event)=> {
      setName([event.target.value])

   }
   return (
      <div className= "Search">
         
        <input className= "barra" onChange = {handleChange} type='search' />
         <button className="botonAgregar" onClick={()=> props.onSearch(name)}> Agregar </button> 

      </div>
      
   );
}