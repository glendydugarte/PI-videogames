
const {genres} = require("../db")
const axios = require("axios")
const {API_KEY} = process.env

const getAllGenres = async ()=> {
 const URL = `https://api.rawg.io/api/genres`
   const apiGenres = (await axios.get(`${URL}?key=${API_KEY}`)).data.results;
   const apiGenresMap = apiGenres.map((e)=> e.name)
   apiGenresMap.forEach((e)=> 
   genres.findOrCreate({where: {name:e}} )
   )
   const totalGenre = await genres.findAll();
    return totalGenre; 
}

module.exports = getAllGenres;