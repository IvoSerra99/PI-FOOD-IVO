require('dotenv').config();
const axios = require("axios");
const {Diet} = require("../db")
const {API_KEY} = process.env;

const clean = (arr) => {
    return arr.map((e) => {
      return {
        diets: e.diets.map((diet) => diet.trim().replace(/-+$/, "")),
      };
    });
  };
 
const allDiets = async () => {
    
    const {results} = (await (axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`))).data
   
    const apiClean = clean(results)
    
    const dietSet = new Set()

    apiClean.forEach((e) => {
        e.diets.forEach((diet) =>{
            dietSet.add(diet)
        })
    })

    const dietList = [...dietSet]
    
    for (const dietName of dietList) {
        await Diet.findOrCreate({
          where: { name: dietName },
        });
      }

    const dietsDB = await Diet.findAll()
    
    return [...dietsDB]
}
module.exports= {allDiets}