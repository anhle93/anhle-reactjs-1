export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = [...items];

    let productAlreadyInCart = false;

    cartItems.forEach(item => {
        if (item.id === product.id) {
            item.count += 1;
            productAlreadyInCart = true;
        }
    });

    if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return dispatch({
        type: ADD_TO_CART,
        payload: {
            cartItems: cartItems
        }
    })

}

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = [...items].filter(a => a.id !== product.id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            cartItems
        }
    })
}