import { ADD_TO_CART, REMOVE_FROM_CART } from "./Cart.action"

const initialState = { items: [] }

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state, {
                items: action.payload.cartItems
            })

        case REMOVE_FROM_CART:
            return Object.assign({}, state, {
                items: action.payload.cartItems
            })

        default:
            return state;
    }
}