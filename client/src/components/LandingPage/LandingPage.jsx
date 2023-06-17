
import { useDispatch } from "react-redux"
import style from "./LandingPage.module.css"
import {NavLink} from "react-router-dom"
import { useEffect } from "react"
import { getAll } from "../../redux/action"


export default function LandingPage () {
    
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(getAll())
        
    },[dispatch])
 return(
    <div className={style.container}>
        <NavLink to="/home">
        <button >HomePage</button>
        </NavLink>
    </div>
 );
}