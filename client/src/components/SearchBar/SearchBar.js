import { useState } from "react"
import { getName } from "../../redux/action";
import {useDispatch} from 'react-redux'


export default function SearchBar (){
    const [name, setName] = useState('');
    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    const dispatch = useDispatch();
  
  
    const handleSearch = () => {
      dispatch(getName(name));
    };
  
    return (
      <div>
        <input type="search" onChange={handleChange} name="name" />
        <button onClick={handleSearch}>Buscar receta</button>
      </div>
    );
  };