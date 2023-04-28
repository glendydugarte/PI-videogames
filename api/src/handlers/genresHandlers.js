
const getAllGenres = require("../controllers/genresControllers")

const getGenresHandler = async(req,res)=> {

    try {
    const results = await getAllGenres()
    res.status(200).json(results);
    } catch (error) {
        res.status(400).json({error: error.message})
    } 

}
module.exports = { getGenresHandler};
