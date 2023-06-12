import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getId } from "../../redux/action"
import { useParams } from "react-router-dom"



export default function Detail () {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() =>{
      dispatch(getId(id))
    },[])
        const recetaId = useSelector((state) => state.id)
    return (
            <div>
                <p>{recetaId.title}</p>
            </div>
    )
}