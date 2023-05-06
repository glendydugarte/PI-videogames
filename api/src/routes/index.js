const { Router } = require('express');
const videogamesRoutes = require("../routes/videogamesRoutes")
const genresRoutes = require("../routes/genresRoutes");
const platformsRoutes = require('./platformsRoutes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRoutes);
router.use("/genres", genresRoutes);
router.use("/platforms", platformsRoutes);
module.exports = router;
