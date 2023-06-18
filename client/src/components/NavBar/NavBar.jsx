import { useDispatch, useSelector } from "react-redux"
import { Link} from "react-router-dom"
import { resetPage } from "../../redux/action"

export default function NavBar () {
    const paginado = useSelector((state) => state.paginado)
    const dispatch = useDispatch()
    const handleHome = () => {
        if(paginado > 1){
        dispatch(resetPage())
        } 
    }
    return (
        <div>
            <Link to="/home"><button onClick={handleHome}>Home</button></Link>
            <Link to="/create"><button>Crear Receta</button></Link>
        </div>
    )
}