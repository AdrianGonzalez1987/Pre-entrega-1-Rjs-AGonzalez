import { useContext, useState } from "react"
import { CardContex } from "../../context/CardContex"
import { Navigate } from "react-router"
import { collection,addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const Checkout = () => {
    const {cart, totalCarrito, vaciarCarrito } = useContext(CardContex)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion:'',
        email:''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // validaciones
        if(values.nombre.length < 3){
            alert("el nombre es muy corto")
            return
        }
        if(values.direccion.length < 8){
            alert("la direccion es muy corta")
            return
        }
        if(values.email.length < 6){
            alert("el email es muy corto")
            return
        }


        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date()
        }
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
        //console.log(order)
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registro exitosamente</h2>
                <hr/>
                <p>Guarda tu numero de orden: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0 ) {
        return <Navigate to="/"/>
    }
    return (
        <div>
            <h2>Ingresa tus datos</h2>
            <hr/>
            <form onSubmit={handleSubmit}> 

                <input
                    value={values.nombre}
                    type = "text"
                    className="form-comtrol my-2"
                    placeholder="Tu nombre"
                    onChange={handleInputChange}
                    name="nombre"
                />
                <input
                    value={values.direccion}
                    type = "text"
                    className="form-comtrol my-2"
                    placeholder="Tu direccion"
                    onChange={handleInputChange}
                    name="direccion"
                />
                <input
                    value={values.email}
                    type = "email"
                    className="form-comtrol my-2"
                    placeholder="Tu mail"
                    onChange={handleInputChange}
                    name="email"
                />

                <button className="btn btn-primary" type="submit">Enviar</button>

            </form>
        </div>
    )
}

export default Checkout