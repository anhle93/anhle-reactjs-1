import firebase from 'firebase';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function loginRequestAction() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginSuccessAction(result) {
    return {
        type: LOGIN_SUCCESS,
        payload: result
    }
}

export function loginFailAction(error) {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}

export const loginAction = (email, password) => {
    return async(dispatch) => {
        dispatch(loginRequestAction());
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(loginSuccessAction(result))
        } catch (error) {
            dispatch(loginFailAction(error))
        }
    }
    
}
