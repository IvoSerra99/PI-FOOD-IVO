const {Recipe} = require("../db")

const postRecipe = async (req, res) =>{
    try {
        const {name, image, resumen, health, pasos} = req.body
        
        if(!name || !image || !resumen || !health || !pasos){
            return res.status(404).send("Falta información")
        }
        await Recipe.create({
            name,
            image,
            resumen,
            health,
            pasos
        })
        return res.status(200).send("Receta creada exitosamente")
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = {postRecipe}
