import style from "./LandingPage.module.css"
import {NavLink} from "react-router-dom"

export default function LandingPage () {
 return(
    <div className={style.container}>
        <NavLink to="/home">
        <button >HomePage</button>
        </NavLink>
    </div>
 );
}