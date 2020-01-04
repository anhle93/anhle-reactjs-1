import { connect } from 'react-redux';
import { filterProducts } from '../ProductList/ProductList.action';
import SideBar from './SideBar';

const mapStateToProps = (store) => ({
    load: store.productListReducer.load,
    products: store.productListReducer.data,
    sale: store.productListReducer.sale
})

const mapDispatchToProps = {
    filterProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)