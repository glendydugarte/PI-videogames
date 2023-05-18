const { videogame, genres } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env
const { Op } = require("sequelize")


const cleanArrayApi = (arr) => // esta funcion me ayuda a mostrar info necesaria
  arr.map((elem) => { // este array es el array de videojuegos que viene de la api.
    return {
      id: elem.id,
      name: elem.name,
      description: elem.description,
      platforms: elem.platforms ? elem.platforms.map((elem) => elem.platform.name) : [],
      rating: elem.rating,
      released: elem.released,
      background_image: elem.background_image,
      genres: elem.genres.map((elem) => elem.name),
      created: false
    };

  });

const cleanArrayDb = (arr) => // esta funcion me ayuda a mostrar info necesaria
  arr.map((elem) => { // este array es el array de videojuegos que viene de la api.
    return {
      id: elem.id,
      name: elem.name,
      description: elem.description,
      platforms: elem.platforms,
      rating: elem.rating,
      released: elem.released,
      background_image: elem.background_image,
      genres: elem.genres.map((elem) => elem.name),
      created: elem.created
    };

  });
const cleanObj = (obj) => // esta funcion me ayuda a mostrar info necesaria
{
  return {
    id: obj.id,
    name: obj.name,
    description: obj.description,
    platforms: obj.platforms ? obj.platforms.map((elem) => elem.platform.name) : [],
    rating: obj.rating,
    released: obj.released,
    background_image: obj.background_image,
    genre: obj.genres,
    created: false
  };

};

const getAllVideogames = async () => {
  const URL = `https://api.rawg.io/api/games`;
  const dbVideogamesRaw = await videogame.findAll({
    include: {
      model: genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const dbVideogames = cleanArrayDb(dbVideogamesRaw);

  const apiVideogames = [];
  for (let i = 1; i < 6; i++) {
    const response = await axios.get(`${URL}?key=${API_KEY}&page=${i}`);
    const apiVideogamesRaw = response.data.results;
    apiVideogames.push(...apiVideogamesRaw);
  }
  const cleanApiVideogames = cleanArrayApi(apiVideogames);


  return [...dbVideogames, ...cleanApiVideogames];
};



const searchVideogameByName = async (name, limit = 15) => {
  const URL = `https://api.rawg.io/api/games`
  const dbVideogamesRaw = await videogame.findAll({ where: { name: { [Op.iLike]: `%${name}%` } }, limit: limit, include: [{ model: genres, attributes: ['name'] }] });
  const dbVideogames = cleanArrayDb(dbVideogamesRaw)
  const apiVideogamesRaw = (await axios.get(`${URL}?search=${name}&key=${API_KEY}`)).data.results // https://api.rawg.io/api/games?search={game}
  const apiVideogames = cleanArrayApi(apiVideogamesRaw.slice(0, limit))

  return [...apiVideogames, ...dbVideogames]
}


const getVideogameById = async (id, source) => {
  const URL = `https://api.rawg.io/api/games/`
  let apiId = {}
  let bdId = {}
  source === "api" //pregunto si es de api
    ? apiId = (await axios.get(`${URL}${id}?key=${API_KEY}`)).data //lo busca en api
    : bdId = (await videogame.findByPk(id, { include: { model: genres, through: { attributtes: ["name"], }, }, })) // sino, en bdd
  apiId = cleanObj(apiId)

  return source === "api" ? apiId : bdId;
  //138b219a-6015-4aa6-88c7-48e4b7daa973
}

const createVideogame = async (name, description, platforms, background_image, released, rating, genres) => {
  const newVideogame = await videogame.create({ name, description, platforms, background_image, released, rating, created: true }) //Videogame.create es una promesa
  newVideogame.addGenres(genres);
  return newVideogame;
}


module.exports = {
  createVideogame,
  getVideogameById,
  searchVideogameByName,
  getAllVideogames
}