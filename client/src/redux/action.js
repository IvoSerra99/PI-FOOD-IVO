import { GET_ALL, FIND_RECIPE } from "./action-types";
import axios from "axios"

export const getAll = () => {
    return async function (dispatch){
        const {data} = await axios.get("http://localhost:3001/recipes")
        dispatch({type: GET_ALL, payload: data})
    }
       
}
export const getName = (name) => {
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        dispatch({type: FIND_RECIPE, payload: data})
    }
       
}



