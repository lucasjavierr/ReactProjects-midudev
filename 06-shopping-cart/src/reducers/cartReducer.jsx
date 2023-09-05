export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_TO_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR:CART'
}

export const updateLocalSorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART : {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
      // una forma seria utilizando structuredClone
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalSorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
      updateLocalSorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_TO_CART: {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocalSorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART : {
      updateLocalSorage(cartInitialState)
      return cartInitialState
    }
  }
  return state
}
