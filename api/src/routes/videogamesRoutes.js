const {Router} = require("express");
const videogamesRoutes = Router();
const {getVideogamesHandler, getVideogameByIdHandler, postVideogameHandler} = require("../handlers/videogamesHandler");
 
const validate = (req, res, next)=>{
    const {name, description, platforms,background_image,released,rating}= req.body
    if(!name)return res.status(404).json({error: 'Missing Name'});
    if(!description)return res.status(404).json({error: 'Missing description'});
    if(!platforms)return res.status(404).json({error: 'Missing platforms'});
    if(!background_image)return res.status(404).json({error: 'Missing background_image'});
    if(!released)return res.status(404).json({error: 'Missing released'});
    if(!rating)return res.status(404).json({error: 'Missing rating'});

    next();
}

videogamesRoutes.get("/", getVideogamesHandler);
videogamesRoutes.get("/:id", getVideogameByIdHandler);
videogamesRoutes.post("/", validate, postVideogameHandler);




module.exports = videogamesRoutes;