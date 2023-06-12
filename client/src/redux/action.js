import { GET_ALL, GET_ID } from "./action-types";
import axios from "axios"

export const getAll = () => {
    return async function (dispatch){
        const {data} = await axios.get("http://localhost:3001/recipes")
        dispatch({type: GET_ALL, payload: data})
    }
       
}
export const getId = (id) => {
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/recipes/${id}`)
        dispatch({type: GET_ID, payload: data})
    }
}


