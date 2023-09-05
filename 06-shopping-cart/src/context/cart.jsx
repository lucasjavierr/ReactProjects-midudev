import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // verifico si el producto ya esta en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    if (productInCartIndex >= 0) {
      // una forma seria utilizando structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // si el producto no esta el carrito, spread al array, al producto y le agrego quantity: 1
    setCart((prevState) => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
// 1:19:40
