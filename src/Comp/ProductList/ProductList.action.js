// import dataList from '../../data.json';
import axios from 'axios';

export const GET_PRODUCT_LIST_REQUEST = 'GET_PRODUCT_LIST_REQUEST';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAIL = 'GET_PRODUCT_LIST_FAIL';
export const FILTER_PRODUCT_BY_SALE = 'FILTER_PRODUCT_BY_SALE';
export const ORDER_PRODUCT = 'ORDER_PRODUCT';

export function getProductListRequestAction() {
    return {
        type: GET_PRODUCT_LIST_REQUEST
    }
}

export function getProductListSuccessAction(result) {
    return {
        type: GET_PRODUCT_LIST_SUCCESS,
        payload: result
    }
}

export function getProductListFailAction(error) {
    return {
        type: GET_PRODUCT_LIST_FAIL,
        payload: error
    }
}

export const filterProducts = (products, sale) => (dispatch) => {
    return dispatch({
            type: FILTER_PRODUCT_BY_SALE,
            payload: {
                sale: sale,
                items: sale === '' ? products : products.filter(ele => ele.promotion_percent >= sale)
            }
        }) 
}

export const sortProducts = (products, type) => (dispatch) => {
    const _products = [...products]
    switch (type) {
        case 'sortnameaz':
            _products.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            break;
        case 'sortnameza':
            _products.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            });
            break;
        case 'sortza':
            _products.sort((a, b) => a.final_price - b.final_price);
            break;
        case 'sortaz':
            _products.sort((a, b) => b.final_price - a.final_price);
            break;
        default:
            break;
    }

    return dispatch({
        type: ORDER_PRODUCT,
        payload: {
            type: type,
            items: _products
        }
    })
}

export function productListAction(name = 'ao-so-mi-nam') {
    return async (dispatch) => {
        dispatch(getProductListRequestAction());

        try {
            const dataAPI = await axios({
                method: "GET",
                // url: `https://mapi.sendo.vn/mob/product/cat/${name}?p=1`
                url: `https://mapi.sendo.vn/mob/product/search?p=1&q=${name}`
            })
            
            if (dataAPI.data.data) {
                
                dispatch(getProductListSuccessAction(dataAPI.data.data))       
                
            } else {
                dispatch(getProductListSuccessAction([]))
            }
        } catch (error) {
            dispatch(getProductListFailAction(error))
        }
    }
}
