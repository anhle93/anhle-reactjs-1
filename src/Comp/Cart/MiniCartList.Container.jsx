import { connect } from 'react-redux';
import { removeFromCart } from './Cart.action';
import MiniCartList from './MiniCartList';

const mapStateToProps = (store) => {
    return {
        cartItems: store.cart.items
    }
}

const mapDispatchToProps = {
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartList);