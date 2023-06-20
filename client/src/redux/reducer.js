import {
  GET_ALL,
  GET_DETAIL,
  FIND_RECIPE,
  All_DIETS,
  NEXT,
  PREV,
  ORDER,
  ORDER_ALFA,
  ORDER_API,
  FIND_DIET
} from "./action-types";

const initialState = {
  recipes: [],
  recipeName: [],
  recipeDetail:[],
  diets: [],
  current: -9,
  paginado: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        recipes: action.payload,
        recipeName: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case FIND_RECIPE:
      return {
        ...state,
        recipeName: action.payload,
      };
    case FIND_DIET:
      const allRecipeOrderedDiet = [...state.recipes];
      console.log(action.payload);
      let filtrado = allRecipeOrderedDiet.filter((e) => e.hasOwnProperty('diets') && e.diets.includes(action.payload))
      return {
        ...state,
        recipeName: filtrado
            
      };
    case ORDER:
      const allRecipeOrdered = [...state.recipes];
      return {
        ...state,
        recipeName:
          action.payload === "A"
            ? allRecipeOrdered.sort((a, b) => a.health - b.health)
            : allRecipeOrdered.sort((a, b) => b.health - a.health),
      };
    case ORDER_ALFA:
      const allRecipeOrderedAlfa = [...state.recipes];
      return {
        ...state,
        recipeName:
          action.payload === "A"
            ? allRecipeOrderedAlfa.sort((a, b) => a.name.localeCompare(b.name))
            : allRecipeOrderedAlfa.sort((a, b) => b.name.localeCompare(a.name)),
      };
    case ORDER_API:
      const stateCopy = [...state.recipes];
      const fromApi = stateCopy.filter((a) => a.api === true);
      const fromDataBase = stateCopy.filter((a) => !a.api);

      return {
        ...state,
        recipeName: action.payload === "A" ? fromApi : fromDataBase,
      };

    case All_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case NEXT:
      let indexNext = state.current + 9;
      let paginadoNext = state.recipes.slice(indexNext, indexNext + 9);
      return {
        ...state,
        recipeName: paginadoNext,
        current: state.current + 9,
        paginado: state.paginado + 1,
      };
    case PREV:
      let indexPrev = state.current - 9;
      let paginadoPrev = state.recipes.slice(indexPrev, indexPrev + 9);
      return {
        ...state,
        recipeName: paginadoPrev,
        current: state.current - 9,
        paginado: state.paginado - 1,
      };
    default:
      return { ...state };
  }
};
export default reducer;
