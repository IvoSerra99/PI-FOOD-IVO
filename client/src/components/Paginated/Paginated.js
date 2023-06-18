import { useDispatch, useSelector } from "react-redux"
import { nextPage, prevPage } from "../../redux/action"

export default function Paginated () {

    const paginado = useSelector((state) => state.paginado)
    
    const dispatch = useDispatch()

    const handlerNext = () => {
        if(paginado < 12){
            dispatch(nextPage())
        }
    }
    const handlerPrev = () => {
        
        if(paginado > 1){
            dispatch(prevPage())
        }
    }   
    
    return(
       <div>
       <button onClick={handlerPrev}>prev</button>
        <p>Current Page {paginado}</p>
       <button onClick={handlerNext}>next</button>
       </div> 
    )
}