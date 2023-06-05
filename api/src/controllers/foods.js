require('dotenv').config();
const axios = require("axios");
const {API_KEY} = process.env;
const foods = async (req, res) => {
    const response = await (axios.get(`https://api.spoonacular.com/recipes/complexSearch${API_KEY}`))
}