import React from 'react'
import "./searchBar.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideoGames } from '../../redux/actions';


 export function SearchBar() {
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
}


function handleSubmit(e){
  e.preventDefault()
  dispatch(getNameVideoGames(name))

}
  return (
    <div>
    <form className="search">
      <input
        className="button"
        type="text"
        placeholder="Search game by name..." onChange={(e)=>handleInputChange(e)}/>

      <button type="submit" className="button" onClick = {(e)=> handleSubmit(e)}>
        Search
      </button>
    </form>
  </div>
  )
}

export default SearchBar;