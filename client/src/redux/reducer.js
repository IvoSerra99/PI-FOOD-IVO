import {
  GET_ALL,
  FIND_RECIPE,
  All_DIETS,
  NEXT,
  PREV,
  RESET,
  ORDER,
  ORDER_ALFA,
  ORDER_API,
} from "./action-types";

const initialState = {
  recipes: [],
  recipeName: [],
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
    case FIND_RECIPE:
      return {
        ...state,
        recipeName: action.payload,
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
    case RESET:
      return {
        ...state,
        recipeName: [...state.recipes],
        current: -9,
        paginado: 0,
      };
    default:
      return { ...state };
  }
};
export default reducer;
