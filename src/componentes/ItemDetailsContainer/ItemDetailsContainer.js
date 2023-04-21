import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader";
import {getDoc, doc } from "firebase/firestore"
import {db} from "../../firebase/config"

const ItemDetailsComtainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        // pedirDatos()
        //     .then((res) => {
        //         setItem(res.find((prod) => prod.id === Number (itemId)))
        //     })
        //     
        
        //1.- armo la referencia para un solo producto
            const docRef = doc(db,"productos", itemId )
        //2.- llamo a la referencia
            getDoc(docRef)
                .then((doc) => {
                    setItem({
                        id: doc.id,
                        ...doc.data()
                    })                  
                })
                .finally(() => {
                        setLoading(false)
                    })
    }, [itemId])


    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader/>
                    : <ItemDetail item={item} />
            }

        </div>
    )
}

export default ItemDetailsComtainer