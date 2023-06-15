import { Link} from "react-router-dom"

export default function NavBar () {
    
    return (
        <div>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/create"><button>Crear Receta</button></Link>
        </div>
    )
}