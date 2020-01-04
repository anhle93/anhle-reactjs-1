import axios from 'axios';

export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

function getProductRequestAction() {
    return {
        type: GET_PRODUCT_REQUEST
    }
}

function getProductSuccessAction(result) {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: result
    }
}

function getProductFailAction(error) {
    return {
        type: GET_PRODUCT_FAIL,
        payload: error
    }
}

export function productDetail(id) { 
    return async (dispatch) => {
        dispatch(getProductRequestAction())
        // const product = dataJson.data.find(item => item.product_id === id);
        //https://mapi.sendo.vn/mob/product/${PRODUCT_ID}/detail/
        try {
            const product = await axios({
                method: "GET",
                url: `https://mapi.sendo.vn/mob/product/${id}/detail/`
            })
            
            dispatch(getProductSuccessAction(product.data));
        } catch (error) {
            dispatch(getProductFailAction(error));
        }   
    }
    
}
