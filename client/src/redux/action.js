import { GET_ALL,GET_DETAIL, FIND_RECIPE, All_DIETS , NEXT, PREV, ORDER, ORDER_ALFA, ORDER_API, FIND_DIET} from "./action-types";
import axios from "axios"
//import {modificatedResults} from "./los100nuevos"

export const post = (form) => {
    return async function (){
      axios
      .post("http://localhost:3001/recipes", form)
      .then((res) => alert(res.data))
      .catch((err) => alert(err));
  
}
}

export const getDetail = (id) => {
    
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/recipes/${id}`)
        
        dispatch({type: GET_DETAIL, payload: data})
    }
}

export const filterDiet = (orden) => {
    return {
      type:FIND_DIET,
      payload: orden,
    };
}

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




