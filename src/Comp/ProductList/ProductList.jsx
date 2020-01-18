import React, { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';

function ProductList(props) {

    useEffect(() => {
        props.productListAction();
    }, []);

    return (
        <div className="col-xl-9 col-lg-8">
            <div className="row mb-10">
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="product-showing mb-40">
                        {
                            props.data.length === 0
                                ? <p>Not Found.</p>
                                : <p>Showing 1–{props.data.length} of {props.data.length} results</p>
                        }
                    </div>
                </div>
            </div>

            {/* tab filter */}
            {/* <div className="row mb-10">
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <select className="tab-control" id="filter" value={props.sale} onChange={(e) => {
                        props.filterProducts(props.products, parseInt(e.target.value));
                    }}>
                        <option value="" selected>Select</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div> */}
            
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        {
                            props.data.map(elm => {
                                return <ProductItem key={elm.product_id} {...elm} onClickCart={() => props.addToCart(props.cartItems, elm)}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ProductList