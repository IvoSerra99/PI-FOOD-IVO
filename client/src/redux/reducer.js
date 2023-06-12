import { GET_ALL, GET_ID } from "./action-types"

const initialState = {
    recipes : [],
    id: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
          return  {
                ...state,
                recipes: action.payload
            }
        case GET_ID:
            return {
                ...state,
                id: action.payload
            }    
        default:
          return  {...state}
    }
}
export default reducer