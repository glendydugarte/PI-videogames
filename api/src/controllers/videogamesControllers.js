const { videogame } = require("../db");
const axios = require("axios");
const { API_KEY} = process.env

const cleanArray = (arr) => // esta funcion me ayuda a mostrar info necesaria
    arr.map((elem) => { // este array es el array de videojuegos que viene de la api.
       return {
        id: elem.id,
        name: elem.name,
        description: elem.description,
        platforms: elem.platforms,
        rating: elem.rating,
        released: elem.released,
        background_image: elem.background_image,
        created: false
       };
       
    }); 
    const cleanObj = (obj) => // esta funcion me ayuda a mostrar info necesaria
     { 
       return {
        id: obj.id,
        name: obj.name,
        description: obj.description,
        platforms: obj.platforms,
        rating: obj.rating,
        released: obj.released,
        background_image: obj.background_image,
        created: false
       };
       
    }; 



const getAllVideogames = async ()=>{
   const URL = `https://api.rawg.io/api/games`
   const dbVideogames = await videogame.findAll();
   const apiVideogamesRaw = (await axios.get(`${URL}?key=${API_KEY}`)).data.results
   const apiVideogames = cleanArray(apiVideogamesRaw)
   
    return [...dbVideogames, ...apiVideogames] // retorno la copia que hay en cada array

};

const searchVideogameByName = async (name, limit = 15)=>{
    const URL = `https://api.rawg.io/api/games`
    const dbVideogames = await videogame.findAll({where: {name: name}, limit: limit});
    const apiVideogamesRaw = (await axios.get(`${URL}?search=${name}&page_size=15&key=${API_KEY}`)).data.results // https://api.rawg.io/api/games?search={game}
    const apiVideogames = cleanArray(apiVideogamesRaw)

    return [...apiVideogames, ...dbVideogames] 
}


const getVideogameById = async (id,source)=> {
const URL = `https://api.rawg.io/api/games/`
let apiId = {}
let bdId= {}
 source === "api" //pregunto si es de api
 ?  apiId = (await axios.get(`${URL}${id}?key=${API_KEY}`)).data //lo busca en api
 : bdId =(await videogame.findByPk(id, { includes: { model : genres}})) // sino, en bdd
  apiId= cleanObj(apiId)

  return  source === "api" ? apiId : bdId;

 }

const createVideogame = async( name, description, platforms, background_image, released, rating, genres)=> {
const newVideogame = await videogame.create({ name, description, platforms, background_image, released, rating, created: true}) //Videogame.create es una promesa
await newVideogame.set(genres)
return newVideogame;
}


module.exports = {createVideogame, 
    getVideogameById, 
    searchVideogameByName,
    getAllVideogames}