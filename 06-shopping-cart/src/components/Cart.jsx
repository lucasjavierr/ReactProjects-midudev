import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'

export function Cart () {
  const cartCheackboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheackboxId}>
        <CartIcon />
      </label>
      <input id={cartCheackboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='' />
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
