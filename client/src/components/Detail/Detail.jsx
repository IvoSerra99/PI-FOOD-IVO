import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import style from "./Detail.module.css"




export default function Detail () {
    const {id} = useParams()
    
    const [recipe, setRecipe] = useState({});
    useEffect(  () => {
            axios(`http://localhost:3001/recipes/${id}`)
            .then(({ data }) => {
             setRecipe(data);
            })
            .catch((error) => {
                console.log(error); 
            });
    },[id])
   console.log(recipe);
    return (
    <div className={style.card}>
      <div className={style.recipeCard}>
        <img src={recipe.image} alt={recipe.name} className={style.recipeImage} />
        <div className={style.recipeInfo}>
          <h2>{recipe.name}</h2>
          <p>{recipe.resume}</p>
          <p>Health Score: {recipe.health}</p>
          <h3>Paso a Paso:</h3>
          <ol>
          {recipe.pasos && recipe.pasos[0].steps.map((ele) => (
                <li>{ele.step}</li>
            ))}
          </ol>
          <p>Tipos de dieta: {recipe.diets}</p>
        </div>
      </div>
    </div>
    )
}