const {handlerRecipes} = require("../handlers/handlerRecipes")
const {postRecipe} = require("../handlers/postRecipe")
const { Router } = require('express');
const { getRecipeId } = require("../controllers/getRecipeId");
const { handlerDiets } = require("../handlers/handlerDiets");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", handlerRecipes)
router.get("/diets", handlerDiets)
router.get("/:idRecipe", getRecipeId)
router.post("/", postRecipe)


module.exports = router;
