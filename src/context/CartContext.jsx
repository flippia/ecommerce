import { createContext, useReducer } from "react";

export const CartContext = createContext()

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_CART':
            return { ...state, showCart: !state.showCart }
        case 'ADD':
            const uniqueCounts = array => {
                const counts = []
            
                array.forEach(element => {
                    if (counts.filter(count => count.id === element.id).length === 0) {
                        counts.push(element)
                    } else {
                        const found = counts.find(count => count.id === element.id);
                        found.duplicates++
                    }
                })
            
                return counts
            }
            const afterItems = uniqueCounts([...state.cartItems, action.payload])
            return { ...state, purchased: state.purchased + 1, cartItems: afterItems }
        case 'DECREASE':
            return { ...state, purchased: state.purchased - 1 }
        default:
            return state
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, {
        showCart: false,
        purchased: 0,
        cartItems: []
    })

    const toggleCart = () => {
        dispatch({ type: 'TOGGLE_SHOW_CART' })
    }

    const addItem = (item) => {
        dispatch({ type: 'ADD', payload: item })
    }

    const decreaseItem = () => {
        dispatch({ type: 'DECREASE' })
    }

    return (
        <CartContext.Provider value={{ ...state, toggleCart, addItem, decreaseItem }}>
            {children}
        </CartContext.Provider>
    )
}