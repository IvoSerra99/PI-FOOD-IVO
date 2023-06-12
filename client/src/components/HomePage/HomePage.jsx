import Cards from "../Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getAll}  from "../../redux/action";

export default function HomePage () {
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(getAll())
    },[])
    return(
        <div>
            <Cards/>
        </div>
    );
}