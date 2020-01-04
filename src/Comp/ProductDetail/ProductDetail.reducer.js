import { GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS} from './ProductDetail.action';

const initialState = {
    data: {},
    load: false,
    fail: null
}

export default function productDetailReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return Object.assign({}, state, {
                load: true
            })

        case GET_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                data: action.payload
            })

        case GET_PRODUCT_FAIL:
            return Object.assign({}, state, {
                load: true,
                fail: action.error
            })

        default:
            return state
    }
}