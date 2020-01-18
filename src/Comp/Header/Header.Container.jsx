import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (store) => {
    return {
        cartItems: store.cart.items
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);