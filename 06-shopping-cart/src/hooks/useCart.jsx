import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export function useCart () {
  const cart = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('useCart está siendo utilizado en un componente que no tiene acceso al CartProvider')
  }

  return cart
}
