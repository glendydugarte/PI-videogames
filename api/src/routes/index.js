const { Router } = require('express');
const videogamesRoutes = require("../routes/videogamesRoutes")
const genresRoutes = require("../routes/genresRoutes")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRoutes);
router.use("/genres", genresRoutes);

module.exports = router;
