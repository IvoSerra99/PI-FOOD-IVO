import { GET_ALL, FIND_RECIPE, All_DIETS, NEXT} from "./action-types"

const initialState = {
    recipes:[],
    recipeName:[],
    diets:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
          return  {
                ...state,
            recipes: action.payload,
            recipeName : action.payload,
            }
        case FIND_RECIPE:
            return  {
                ...state,
            recipeName : action.payload
            }
        case All_DIETS:
            return  {
                ...state,
            diets: action.payload
            }
        case NEXT:
            let current = action.payload
            
            let nine = state.recipes.slice(current, current + 9 )
            return {
                ...state,
                recipeName: nine
            } 
        default:
          return  {...state}
    }
}
export default reducer