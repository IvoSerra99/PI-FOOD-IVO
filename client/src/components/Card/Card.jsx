import { Link } from "react-router-dom"
import style from "./Card.module.css"


export default function Card (props) {
    const {name, image, id, diets, key} = props
    
    return (
        <div className={style.card} key={key}>
        <img src={image} alt={name} className={style.image} />
        <div className={style.cardContent}>
          <Link to={`/detail/${id}`}>
          <h3 className={style.name}>{name}</h3>
          </Link>
          <div className={style.diets}>
            <p className={style.dietsTitle}>Diets:</p>
            <ul className={style.dietsList}>
            <li >{diets}</li>
              
            </ul>
          </div>
        </div>
      </div>
    )
}