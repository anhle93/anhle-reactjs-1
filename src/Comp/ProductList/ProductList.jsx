import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

function ProductList(props) {
    console.log(props.list);
    return (
        <div className="col-xl-9 col-lg-8">
            {/* tab filter */}
            <div className="row mb-10">
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="product-showing mb-40">
                        <p>Showing 1–22 of 32 results</p>
                    </div>
                </div>
            </div>
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        {
                            props.list.map(elm => {
                                return <ProductItem key={elm.product_id} {...elm} onClickCart={props.onClickCart}/>
                                // img_url={elm.img_url} shop_name={elm.shop_name} name={elm.name} final_price={elm.final_price} price={elm.price}
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ProductList