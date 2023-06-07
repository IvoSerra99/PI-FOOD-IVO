require('dotenv').config();
const axios = require("axios");
const {API_KEY} = process.env;
const {Recipe} = require("../db")

const allRecipes = async (req, res) => {
    
    try {
        const recipesDb = await Recipe.findAll()
        const {data} = await (axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`))
        const recipesAllDb = [...recipesDb, data.results]
        res.status(200).json(recipesAllDb)

    } catch (error) {
        res.send(404).send(error.message)
    }
}

module.exports = {allRecipes}