import { connect } from 'react-redux';
import Register from './Register';
// import { registerRequestAction, registerFailAction } from './Register.action';
import { registerAction } from './Register.action';

const mapStateToProps = (store) => {
    return {
        load: store.registerReducer.load,
        data: store.registerReducer.data,
        error: store.registerReducer.error
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         registerAction: () => {
//             dispatch(registerRequestAction())
//             dispatch(registerFailAction())
//         }
//     }
// }

const mapDispatchToProps = {
    registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)