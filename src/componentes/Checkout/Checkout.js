import { useContext, useState } from "react"
import { CardContex } from "../../context/CardContex"
import {  Navigate } from "react-router"
import { writeBatch, collection,addDoc, getDocs, query, where, documentId } from "firebase/firestore"
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

    const handleSubmit = async (e) => {
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
        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")

        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id) ))

        const outOsStock =[]

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)

            if(doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOsStock.push(item)
            }
        })

        if (outOsStock.length === 0) {
            // VARIANTE RESUMIDA
            await batch.commit()
            const {id} = await addDoc(ordersRef, orden)
            setOrderId(id)
            vaciarCarrito()
            // VARIANTE CLASICA
            // batch.commit()
            //     .then(() => {
            //         addDoc(ordersRef, orden)
            //             .then((doc) => {
            //                 setOrderId(doc.id)
            //                 vaciarCarrito()
            //             })
            //     })
        } else {
            alert ("hay items sin stock: " + outOsStock.map(i => i.name).join(', ')) //mejorar esta alerta
        }

      

        // addDoc(ordersRef, orden)
        //     .then((doc) => {
        //         setOrderId(doc.id)
        //         vaciarCarrito()
        //     })
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

  // cart.forEach((item) => {
        //     console.log(item)
        //     const docRef = doc(db, "productos", item.id)

        //     getDoc(docRef)   //optengo el documento

        //         .then((doc) => {
        //             let stock = doc.data().stock
        //             if (stock - item.cantidad >= 0){
        //                 updateDoc(docRef, {   //optenido el doc, puedo modificarlo o actualizarlo 
        //                 stock: doc.data().stock - item.cantidad
        //                 })
        //             } else {
        //                 alert("el producto" + doc.data().name + "esta agotado")
        //             }
                    
        //         })

            
        // });