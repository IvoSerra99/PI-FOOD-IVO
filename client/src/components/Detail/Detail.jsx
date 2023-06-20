import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import style from "./Detail.module.css"
import { getDetail } from "../../redux/action"




export default function Detail () {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDetail(id)) 
    },[dispatch, id])
   const recipe = useSelector((state) => state.recipeDetail)
   console.log(recipe.pasos);
    return (
    <div className={style.card}>
      <div className={style.recipeCard}>
        <img src={recipe.image} alt={recipe.title} className={style.recipeImage} />
        <div className={style.recipeInfo}>
          <h2>{recipe.title}</h2>
          <p>{recipe.resume}</p>
          <p>Health Score: {recipe.health}</p>
          <h3>Paso a Paso:</h3>
          <ol>
          {recipe.pasos && recipe.pasos.map((ele) => (
                <li>{ele.step}</li>
            ))}
          </ol>
          <p>Tipos de dieta: {recipe.diets}</p>
        </div>
      </div>
    </div>
    )
}