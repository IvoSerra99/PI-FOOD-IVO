const {Recipe} = require("../db")
const {Diet} = require("../db")

const postRecipe = async (req, res) =>{
    const {name, image, resumen, health, pasos, diets} = req.body
    try {
        
        if(!name || !image || !resumen || !health || !pasos || !diets ){
            return res.status(404).send("Falta información")
        }
        const recetaCreada = await Recipe.create({
            name,
            image,
            resumen,
            health,
            pasos,
        })
        
        diets.map((e) => Diet.addDiets(e))
        return res.status(200).send(recetaCreada)
        
    } catch (error) {
        console.error(error.message)
        res.status(500).send(error.message)
    }
}
module.exports = {postRecipe}
