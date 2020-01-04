import { connect } from 'react-redux';
import ProductList from './ProductList';
import { productListAction } from './ProductList.action';

// func return 1 ob
// const mapStateToProps = (store) => {
//     return {
//         load: store.registerReducer.load,
//         data: store.registerReducer.data,
//         error: store.registerReducer.error
//     }
// }
const mapStateToProps = (store) => ({
    load: store.productListReducer.load,
    data: store.productListReducer.data,
})

const mapDispatchToProps = {
    productListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)