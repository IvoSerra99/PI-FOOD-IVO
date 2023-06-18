require('dotenv').config();
const axios = require("axios");
const {API_KEY} = process.env;
const {Recipe} = require("../db")

const allRecipes = async () => {
     
        const recipesDb = await Recipe.findAll()
        // const respuestaDB = recipesDb.map((e) => {

        // })
        const {results} = (await (axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`))).data
        
        const respuestaApi = results.map((e) => {
                const obj = {
                    name: e.title,
                    image: e.image,
                    resumen: e.summary,
                    id: e.id,
                    health: e.healthScore,
                    pasos: e.analyzedInstructions,
                    diets: e.diets,
                    api: true
                }
                return obj
            })
            
            
        return [...recipesDb, ...respuestaApi]

}

module.exports = {allRecipes}