
import {useSelector} from "react-redux"
import style from "./Cards.module.css"
import Card from "../Card/Card"

export default function Cards () {
    
    const recetas = useSelector((state) => state.recipeName)
    return(
       <div className={style.container}>
        {recetas.map((res) => {
            return <Card 
                key={res.id}
                id={res.id}
                name={res.name}
                image={res.image}
                diets={res.diets}
                health={res.health}
                /> 
        })}
       </div> 
    )
}