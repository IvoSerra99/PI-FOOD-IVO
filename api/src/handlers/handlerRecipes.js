const { allRecipes } = require("../controllers/allRecipes")
const { recipeByName } = require("../controllers/recipeByName")

const handlerRecipes = async (req, res) => {
    
    try {
        const {name} = req.query
        if(name) {
            const response = await recipeByName(name)
            return res.status(200).send(response)
        }
        const allrecipes = await allRecipes()
        res.status(200).send(allrecipes)
        

    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = {handlerRecipes}