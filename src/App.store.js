import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import loginReducer from './Comp/Login/Login.reducer';
import productDetailReducer from './Comp/ProductDetail/ProductDetail.reducer';
import productListReducer from './Comp/ProductList/ProductList.reducer';
import registerReducer from './Comp/Register/Register.reducer';
import cartReducer from './Comp/Cart/Cart.reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({ 
    loginReducer, 
    productDetailReducer, 
    productListReducer, 
    registerReducer,
    cart: cartReducer
});
// export const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }
// const crashReporter = store => next => action => {
//     try {
//         return next(action)
//     } catch (err) {
//         console.error('Caught an exception!', err)
//         // Raven.captureException(err, {
//         //     extra: {
//         //         action,
//         //         state: store.getState()
//         //     }
//         // })
//         // throw err
//     }
// }

const initialState = {}
if (localStorage.getItem('cartItems')) {
    initialState.cart = { items: JSON.parse(localStorage.getItem('cartItems')) }
}

export const store = createStore(
    reducers, initialState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        // applyMiddleware(logger, crashReporter)
    )
)
