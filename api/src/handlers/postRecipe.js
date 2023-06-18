const { Recipe } = require("../db");
const { Diet } = require("../db");

const postRecipe = async (req, res) => {
  const { name, image, resumen, health, pasos, diets } = req.body;
  console.log(`diets: ${diets}`);
  try {
    if (!name || !image || !resumen || !health || !pasos || !diets) {
      return res.status(404).send("Falta información");
    }

    const recipe = await Recipe.create({
      name,
      image,
      resumen,
      health,
      pasos,
      diets,
    });
    const findDiets = await Diet.findAll({
      where: {
        id: diets,
      },
    });
    await recipe.addDiets(findDiets);

    return res.status(200).send("!Su receta fue creada exitosamente!");
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
};
module.exports = { postRecipe };
