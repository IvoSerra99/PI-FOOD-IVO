import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nextPage } from "../../redux/action"

export default function Paginated () {

    
    
    const filtrado = useSelector((state) => state.recipeName)
    console.log(`filtrado: ${filtrado}`);

    const dispatch = useDispatch()

    const [current, setCurrent] = useState(0)
    const [pagina, setPagina] = useState(1)

    const handlerNext = () => {
        setPagina(pagina + 1)
        setCurrent(current + 9)
        dispatch(nextPage(current))
    }
    const handlerPrev = () => {
        if (current !== 0) {
            setCurrent(current - 1)
            dispatch(nextPage(current)) 
        }
    }
    
    return(
       <div>
       <button onClick={handlerPrev}>prev</button>
        <p>Current Page {pagina}</p>
       <button onClick={handlerNext}>next</button>
       </div> 
    )
}