require('dotenv').config();
const {API_KEY} = process.env;
const {Recipe} = require("../db")
const axios = require("axios")


const getRecipeId = (req, res) => {  
    try {
        const {idRecipe} = req.params;
        const RecipeId = Number(idRecipe)
        const findDB = Recipe.findAll({where: {id: RecipeId}}) 
        const {result} = (await (axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)))
        const find = result.filter((e) => e.id === RecipeId)
        if(findDB == null && find.length === 0 ){
            res.status(400).send("Receta no encontrada")
        }
        if(find[0]){
            const receta = {
              health: find[0].healthScore,
              id: find[0].id,
              name: find[0].title,
              imagen: find[0].imagen,
              resumen: find[0].summary,
              pasos:find[0].analyzedInstructions,
              diets: find[0].diets
            }
           return res.status(200).json(receta);
        }

        return res.status(200).json(findDB);

    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = {getRecipeId}