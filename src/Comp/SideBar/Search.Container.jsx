import { connect } from 'react-redux';
import { productListAction } from '../ProductList/ProductList.action';
import Search from './Search';

const mapStateToProps = (store) => ({
    load: store.productListReducer.load,
    data: store.productListReducer.data,
})

const mapDispatchToProps = {
    productListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)