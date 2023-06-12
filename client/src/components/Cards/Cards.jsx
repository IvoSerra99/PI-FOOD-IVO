
import {useSelector} from "react-redux"
import style from "./Cards.module.css"
import Card from "../Card/Card"

export default function Cards () {
    
    const recetas = useSelector((state) => state.recipes)
    return(
       <div className={style.container}>
        {recetas.map((res) => {
            return <Card 
                id={res.id}
                name={res.title}
                image={res.image}
                diets={res.diets}
                /> 
        })}
       </div> 
    )
}