import { useState, useEffect } from "react";
import style from "./Form.module.css";
import validate from "./validate";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/action";

const FormPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const diets = useSelector((state) => state.diets);
  console.log(`diets: ${diets}`);
  const [form, setForm] = useState({
    name: "",
    resumen: "",
    pasos: "",
    health: "",
    image: "",
    diets: [],
  });
  const [errors, setErrors] = useState({});
  console.log(form.diets);
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validate({ ...form, [property]: value }));

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/recipes", form)
      .then((res) => alert(res.data))
      .catch((error) => console.log(error.message));
  };
  const dietChangeHandler = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setForm((form) => ({
        ...form,
        diets: [...form.diets, value],
      }));
    } else {
      setForm((form) => ({
        ...form,
        diets: form.diets.filter((diet) => diet !== value),
      }));
    }
  };
  console.log(form);
  return (
    <>
      <form onSubmit={submitHandler} className={style.form}>
        <div>
          <div>
            <label>Receta</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={changeHandler}
            />
            {errors.e1 && <p>{errors.e1}</p>}
            {errors.e2 && <p>{errors.e2}</p>}
          </div>

          <div>
            <label>Resumen</label>
            <input
              type="text"
              name="resumen"
              value={form.resumen}
              onChange={changeHandler}
            />
            {errors.e3 && <p>{errors.e3}</p>}
            {errors.e4 && <p>{errors.e4}</p>}
          </div>
          <div>
            <label>Pasos a seguir</label>
            <input
              type="text"
              name="pasos"
              value={form.pasos}
              onChange={changeHandler}
            />
            {errors.e5 && <p>{errors.e5}</p>}
            {errors.e6 && <p>{errors.e6}</p>}
          </div>
          <div>
            <label>HealdScore</label>
            <input
              type="number"
              name="health"
              value={form.health}
              onChange={changeHandler}
            />
            {errors.e7 && <p>{errors.e7}</p>}
            {errors.e8 && <p>{errors.e8}</p>}
          </div>
          <div>
            <label>Imagen</label>
            <input
              type="text"
              placeholder="url de la imagen"
              name="image"
              value={form.image}
              onChange={changeHandler}
            />
            {errors.e9 && <p>{errors.e9}</p>}
            {errors.e10 && <p>{errors.e10}</p>}
          </div>
          <button type="submit">Agregar Receta</button>
        </div>
      </form>
      <div>
        <label>Diets</label>
        <div>
          {diets.map((e) => {
            const id = String(e.id); // Asegúrate de convertir el ID en una cadena
            return (
              <div key={e.id}>
                <label>{e.name}</label>
                <input
                  type="checkbox"
                  value={id}
                  name="diets"
                  checked={form.diets.includes(id)}
                  onChange={dietChangeHandler}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default FormPage;
