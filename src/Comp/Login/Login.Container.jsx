import { connect } from 'react-redux';
import Login from './Login';
import { loginAction } from './Login.action';

const mapStateToProps = (store) => {
    return {
        load: store.loginReducer.load,
        data: store.loginReducer.data,
        error: store.loginReducer.error
    }
}

const mapDispatchToProps = {
    loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);