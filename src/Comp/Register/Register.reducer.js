import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from './Register.action';

const initialState = {
    result: null,
    load: false,
    fail: null
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                load: true
            })

        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                data: action.payload
            })

        case REGISTER_FAIL:
            return Object.assign({}, state, {
                load: false,
                fail: action.error
            })

        default:
            return state
    }
}