import firebase from 'firebase';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export function registerRequestAction() {
    return {
        type: REGISTER_REQUEST
    }
}

export function registerSuccessAction(result) {
    return {
        type: REGISTER_SUCCESS,
        payload: result
    }
}

export function registerFailAction(error) {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}

// export const registerActiton = () => {
//     store.dispatch(registerRequestAction())
//     store.dispatch(registerFailAction())
// }

export const registerAction = (email, password) => {
    return async(dispatch) => {
        dispatch(registerRequestAction())
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch(registerSuccessAction(result))
        } catch (error) {
            dispatch(registerFailAction(error))
        }
    }
}

