import { useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import Paginated from "../Paginated/Paginated";
import { IsFromApi, nextPage, orderAlfaRecipes, orderRecipes } from "../../redux/action";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [axu, setAux] = useState(false);

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nextPage());
  }, [dispatch]);


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
      <Cards />
    </div>
  );
}
