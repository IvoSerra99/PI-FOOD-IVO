require('dotenv').config();
const {API_KEY} = process.env;
const {Recipe} = require("../db")
const axios = require("axios")


const getRecipeId = async (req, res) => {  
    const {idRecipe} = req.params;
    const id = Number(idRecipe)
    try {
        const findDB = await Recipe.findAll({where: {id}}) 
        const {results} = (await (axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`))).data
        const find = results.filter((e) => e.id === id)
        if(findDB == null && find.length === 0 ){
            res.status(400).send("Receta no encontrada")
        }
        if(find[0]){
            const receta = {
              health: find[0].healthScore,
              id: find[0].id,
              name: find[0].title,
              image: find[0].image,
              resumen: find[0].summary,
              pasos: find[0].analyzedInstructions[0].steps,
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