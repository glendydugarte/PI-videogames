const {createVideogame, 
    getVideogameById, 
    searchVideogameByName, 
    getAllVideogames} = require("../controllers/videogamesControllers")



const getVideogamesHandler = async (req,res)=>{ 
    const { name } = req.query;
  
        const results = name ? await searchVideogameByName(name) : await getAllVideogames() // hago 2 rutas con o sin query=name
        res.status(200).json(results);
   

}

    
const getVideogameByIdHandler = async (req,res)=>{
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api" // pregunto su id no es numero = bdd porque es UUID
                                             // si es numero lo busca en la api
        try {
          const videogameId = await getVideogameById(id, source)  //le pasa el source ¿¿
        res.status(200).json(videogameId)
        } catch(error) {
            res.status(404).json({error: error.message})
            
        }      
};
const postVideogameHandler =  async (req, res)=>{
    const {  name, description, platforms, background_image, released, rating, genres} = req.body;
    try {
    const newVideogame = await createVideogame( name, description, platforms, background_image, released, rating)
    newVideogame.addGenres(genres);
    res.status(201).json(newVideogame)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
};

module.exports = { getVideogamesHandler, getVideogameByIdHandler, postVideogameHandler};