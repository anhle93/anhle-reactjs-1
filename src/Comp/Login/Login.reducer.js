import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from './Login.action';

const initialState = {
    result: null,
    load: false,
    fail: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                load: true
            })

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                data: action.payload
            })

        case LOGIN_FAIL:
            return Object.assign({}, state, {
                load: true,
                fail: action.error
            })
    
        default:
            return state
    }
}