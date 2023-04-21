




import { useState, createContext  } from "react";




export const CardContex = createContext()


//este sera el CardContex.Provider

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
  

  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
  }
  const removerItem = (id) => {
    setCart( cart.filter((prod) => prod.id !== id) )
  }
  //verificamos si el elemento existe
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id) //"some" a diferencia de "find" debuelve un booleano (true o false)
  }
  //vemos la cantidad de producto
  const totalCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0) //"reduce" reduce el arrray a un solo valor y funciona como un acumulador
  }
  const totalCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
  }
  const vaciarCarrito = () => {
    setCart([])
  }
    return (
        <CardContex.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            vaciarCarrito,
            removerItem,
            totalCarrito
        }}>
            {children}
        </CardContex.Provider>
    )
}