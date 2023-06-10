const {Recipe} = require("../db")
const {Op} = require("sequelize")
const axios = require("axios")
require('dotenv').config();
const {API_KEY} = process.env;


const recipeByName = async (name) => {
    const namelower = name.toLowerCase()
   
    const resDB = await Recipe.findAll({
        where: {
            name: {
                [Op.iLike]: `%${namelower}%`
            }
        }
    });
    const {results} = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data
    const respuestaFind = results.find((e) => e.title === namelower)
    if(resDB === null && respuestaFind.length){
        return throwError(`No se encontró una receta con el nombre: ${name}`)
    }
    const allRes = [respuestaFind, ...resDB]
    return allRes
};
module.exports = {recipeByName}