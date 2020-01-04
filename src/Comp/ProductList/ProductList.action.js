// import dataList from '../../data.json';
import axios from 'axios';

export const GET_PRODUCT_LIST_REQUEST = 'GET_PRODUCT_LIST_REQUEST';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAIL = 'GET_PRODUCT_LIST_FAIL';
export const FILTER_PRODUCT_BY_SALE = 'FILTER_PRODUCT_BY_SALE';
export const ORDER_PRODUCT_BY_NAME_DESC = 'ORDER_PRODUCT_BY_NAME_DESC';

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

export function filterProducts(products, sale) {
    console.log(sale === '' ? products : products.filter(ele => ele.promotion_percent >= sale));
    return {
        type: FILTER_PRODUCT_BY_SALE,
        payload: {
            sale: sale,
            items: sale === '' ? products : products.filter(ele => ele.promotion_percent >= sale)
        }
    }
}

export function sortProducts(products, sort) {
    return {
        type: ORDER_PRODUCT_BY_NAME_DESC,
        payload: {
            sort: sort,
            items: products
        }
    }
}

export function productListAction(name = 'ao-so-mi-nam') {
    return async (dispatch) => {
        dispatch(getProductListRequestAction());

        try {
            console.log(name)
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

export function sortProduct(products, sort) {
    return async (dispatch) => {
        switch (sort) {
            case 'sortaz':
                products.sort((a, b) => a.final_price - b.final_price);
                break;
            case 'sortza':
                products.sort((a, b) => b.final_price - a.final_price);
                break;
            case 'sortnameaz':
                products.sort((a, b) => {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })
                break;
            case 'sortnameza':
                products.sort((a, b) => {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                })
                break;
            case 'filtersale':
                products.filter(ele => ele.promotion_percent >= 30)
                break;
            default:
                break;
        }
    }
}
