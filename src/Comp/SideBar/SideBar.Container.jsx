import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../ProductList/ProductList.action';
import SideBar from './SideBar';

const mapStateToProps = (store) => ({
    load: store.productListReducer.load,
    products: store.productListReducer.data,
    filteredProducts: store.productListReducer.filteredItems,
    sale: store.productListReducer.sale,
    type: store.productListReducer.type,
})

const mapDispatchToProps = {
    filterProducts,
    sortProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)