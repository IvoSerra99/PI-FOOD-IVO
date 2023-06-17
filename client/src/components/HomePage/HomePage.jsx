import { useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
//import { useEffect } from "react";
//import { useDispatch } from "react-redux";
//import {getAll}  from "../../redux/action";
import Paginated from "../Paginated/Paginated";
import { nextPage } from "../../redux/action";
import { useEffect } from "react";

export default function HomePage () {
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(nextPage(0))
        
    },[dispatch])
    
    return(
        <div>
            <Paginated/>
            <Cards/>
        </div>
    );
}