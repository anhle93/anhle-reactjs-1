import { connect } from 'react-redux';
import ProductList from './ProductList';
import { productListAction } from './ProductList.action';
import { addToCart } from '../Cart/Cart.action';

const mapStateToProps = (store) => ({
    load: store.productListReducer.load,
    data: store.productListReducer.filteredItems,
    cartItems: store.cart.items,
})

const mapDispatchToProps = {
    productListAction,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)