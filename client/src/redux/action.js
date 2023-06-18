import { GET_ALL, FIND_RECIPE, All_DIETS , NEXT, PREV , RESET, ORDER, ORDER_ALFA, ORDER_API} from "./action-types";
import axios from "axios"
//import {modificatedResults} from "./los100nuevos"

export const orderRecipes = (orden) => {
    return {
      type: ORDER,
      payload: orden,
    };
}

export const orderAlfaRecipes = (orden) => {
    return {
      type: ORDER_ALFA,
      payload: orden,
    };
}

export const IsFromApi = (orden) => {
    return {
      type: ORDER_API,
      payload: orden,
    };
}

export const prevPage = () => {
    return {
     type: PREV, 
     
 }
}

 export const resetPage = () => {
    return {
     type: RESET, 
     
 }

}

export const nextPage = () => {
   return {
    type: NEXT, 
    
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
        const {data} = await axios.get("http://localhost:3001/recipes")
        //const data = modificatedResults
        dispatch({type: GET_ALL, payload: data})
    }
       
}
export const getName = (name) => {
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        dispatch({type: FIND_RECIPE, payload: data})
    }
       
}




