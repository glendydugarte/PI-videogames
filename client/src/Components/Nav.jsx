import React from 'react'
import SearchBar from "./SearchBar"



export default function Nav(props){
    return (
        <div className='nav'>
            <SearchBar onSearch = {props.onSearch}/>
        </div>
    )
};