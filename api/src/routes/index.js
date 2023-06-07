const {allRecipes} = require("../controllers/allRecipes")
const {postRecipe} = require("../handlers/postRecipe")
const {getRecipeId} = require("../controllers/getRecipeId")
const {recipeByName} = require("../controllers/recipeByName")
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes", allRecipes)
router.get("/recipes/:idRecipe", getRecipeId)
router.post("/recipes", postRecipe)
router.get("/recipe?name=", recipeByName)

module.exports = router;
