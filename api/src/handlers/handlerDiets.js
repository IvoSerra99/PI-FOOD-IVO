const {allDiets} = require("../controllers/allDiets")
const handlerDiets = async(req, res) => {
    try {
        const result = await allDiets()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {handlerDiets}
