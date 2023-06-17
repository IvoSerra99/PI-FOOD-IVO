import { GET_ALL, FIND_RECIPE, All_DIETS , NEXT} from "./action-types";
import axios from "axios"
import {modificatedResults} from "./los100nuevos"


export const nextPage = (current) => {
   return {
    type: NEXT, 
    payload: current
}
}

export const getDiets = () =>{
    return async function (dispatch){
        const {data} = await axios.get("http://localhost:3001/recipes/diets")
        dispatch({type: All_DIETS, payload: data})
    }
}

export const getAll = () => {
    return async function (dispatch){
        //const {data} = await axios.get("http://localhost:3001/recipes")
        const data = modificatedResults
        dispatch({type: GET_ALL, payload: data})
    }
       
}
export const getName = (name) => {
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        dispatch({type: FIND_RECIPE, payload: data})
    }
       
}




