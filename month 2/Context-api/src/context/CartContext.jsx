import { createContext, useContext, useReducer } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()
const initialState = {
  cart: [],
}
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case 'DELETE_ITEM': {
      const indexToRemove = state.cart.findIndex((item) => item.id === action.payload)
      if (indexToRemove === -1) return state // Item not found

      return {
        ...state,
        cart: [...state.cart.slice(0, indexToRemove), ...state.cart.slice(indexToRemove + 1)],
      }
    }
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext)
}
