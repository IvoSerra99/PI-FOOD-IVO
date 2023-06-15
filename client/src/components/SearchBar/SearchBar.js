import { useState } from "react"


export default function SearchBar (){
    const {name, setName } = useState("")
    const handlerValue = (event) =>{
        setName(event.target.value)
    }

    return (
        <div>
            <input  onChange={handlerValue} type="search" />
            <button onClick={handlerClick}></button>
        </div>
    )
}