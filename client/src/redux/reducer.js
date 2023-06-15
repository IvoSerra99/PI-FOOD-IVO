import { GET_ALL, FIND_RECIPE} from "./action-types"

const initialState = {
    recipes : [],
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
          return  {
                ...state,
                recipes: action.payload
            }
        case FIND_RECIPE:
            return  {
                ...state,
                recipes: action.payload
            }       
        default:
          return  {...state}
    }
}
export default reducer