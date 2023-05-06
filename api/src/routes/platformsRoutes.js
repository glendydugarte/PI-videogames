const {Router} = require("express");
const { getPlatformHandler } = require("../handlers/platformsHandler");
const platformsRoutes = Router();


platformsRoutes.get("/",  getPlatformHandler);


module.exports = platformsRoutes;