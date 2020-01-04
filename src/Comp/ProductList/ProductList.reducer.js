import { 
    GET_PRODUCT_LIST_REQUEST, 
    GET_PRODUCT_LIST_SUCCESS, 
    GET_PRODUCT_LIST_FAIL,
    FILTER_PRODUCT_BY_SALE,
    ORDER_PRODUCT_BY_NAME_DESC
} from './ProductList.action';

const initialState = {
    data: [],
    filteredItems: [],
    sale: 30,
    filterDatas: [],
    load: false,
    fail: null
}

export default function productListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST_REQUEST:
            return Object.assign({}, state, {
                load: true
            })

        case GET_PRODUCT_LIST_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                data: action.payload,
                filteredItems: action.payload
            })

        case GET_PRODUCT_LIST_FAIL:
            return Object.assign({}, state, {
                load: true,
                fail: action.error
            })

        case FILTER_PRODUCT_BY_SALE:
            return Object.assign({}, state, {
                load: false,
                filteredItems: action.payload.data,
                sale: action.payload.sale
            })

        case ORDER_PRODUCT_BY_NAME_DESC:
            return Object.assign({}, state, {
                load: false,
                filterDatas: action.payload.items,
                sort: action.payload.sort
            })

        default:
            return state
    }
}