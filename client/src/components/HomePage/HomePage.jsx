import { useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import Paginated from "../Paginated/Paginated";
import {
  IsFromApi,
  filterDiet,
  nextPage,
  orderAlfaRecipes,
  orderRecipes,
} from "../../redux/action";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [axu, setAux] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nextPage());
  }, [dispatch]);

  const handleOrder = (event) => {
    dispatch(orderRecipes(event.target.value));
    setAux(!axu);
  };
  const handleOrderAlfa = (event) => {
    dispatch(orderAlfaRecipes(event.target.value));
    setAux(!axu);
  };
  const handleFromApi = (event) => {
    dispatch(IsFromApi(event.target.value));
    setAux(!axu);
  };
  const handleDiets = (event) => {
    dispatch(filterDiet(event.target.value));
    setAux(!axu);
  };

  return (
    <div>
      <Paginated />
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="B">Descendente</option>
      </select>
      <select onChange={handleOrderAlfa}>
        <option value="A">A...Z</option>
        <option value="Z">Z...A</option>
      </select>
      <select onChange={handleFromApi}>
        <option value="A">Apis Recipes</option>
        <option value="D">DB Recipes</option>
      </select>
      <select onChange={handleDiets}>
        <option value="gluten free">gluten free</option>
        <option value="dairy free">dairy free</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="vegan">vegan</option>
        <option value="paleolithic">paleolithic</option>
        <option value="primal">primal</option>
        <option value="whole 30">whole 30</option>
        <option value="pescatarian">pescatarian</option>
        <option value="ketogenic">ketogenic</option>
        <option value="fodmap friendly">fodmap friendly</option>
      </select>
      <Cards />
    </div>
  );
}
