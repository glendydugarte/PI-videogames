



const axios = require("axios");
const { API_KEY} = process.env;


const getPlatformsFromApi = async () => {
    const URL = `https://api.rawg.io/api/games`
    const videogames = (await axios.get(`${URL}?key=${API_KEY}`)).data.results;
    let platformsFromApi = videogames.map((videogame) => videogame.platforms).flat();
    let platformsRaw = platformsFromApi.map(elem=> elem.platform.name)
    platformsRaw = [...new Set(platformsRaw)]; //Elimina registros repetidos del array
return platformsRaw;
};

module.exports = {getPlatformsFromApi}