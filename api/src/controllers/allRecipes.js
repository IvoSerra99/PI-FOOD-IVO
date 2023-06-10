require('dotenv').config();
const axios = require("axios");
const {API_KEY} = process.env;
const {Recipe} = require("../db")

const allRecipes = async () => {
     
        const recipesDb = await Recipe.findAll()
        const {results} = (await (axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`))).data
        
        return [...recipesDb, ...results]

}

module.exports = {allRecipes}