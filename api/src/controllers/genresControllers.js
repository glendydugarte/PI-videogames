
const {genres} = require("../models/Genres")
const axios = require("axios")
const API_KEY = process.env

/*const getGenres = async ()=> {
    const URL = `https://api.rawg.io/api/genres`
   const dbGenres = await genres.findAll();
   const apiGenres = (await axios.get(`${URL}?key=${API_KEY}`)).data.results
   
    return [...dbGenres, ...apiGenres] 
}

module.exports = getGenres;*/