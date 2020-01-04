import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import { productDetail } from './ProductDetail.action';

const mapStateToProps = (store) => ({
    load: store.productDetailReducer.load,
    data: store.productDetailReducer.data,
})

const mapDispatchToProps = {
    productDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)