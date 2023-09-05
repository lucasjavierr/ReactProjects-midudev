import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const {addToCart, cart} = useCart()
  return (
    <main className='products'>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <div>
              <strong>{prod.title}</strong> - ${prod.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
