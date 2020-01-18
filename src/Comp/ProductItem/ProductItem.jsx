import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ img_url, shop_name, name, final_price, price, onClickCart, product_id }) { 

    function onClickAddToCart() {
        onClickCart({ name, final_price, price, img_url});
    }
    
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                    {/* <a href="/"> */}
                        <img src={img_url} alt="" />
                        {/* <img className="secondary-img" src="./assets/pro2.jpg" alt="" /> */}
                    {/* </a> */}
                    <div className="product-action text-center">
                        <a title="Shopping Cart" onClick={onClickAddToCart}>
                            <i className="fas fa-shopping-cart" />
                        </a>
                        <Link to={`/product-detail/${product_id}`} title="Quick View">
                            <i className="fas fa-search" />
                        </Link>
                        {/* <a title="Quick View" >
                            <i className="fas fa-search" />
                        </a> */}
                    </div>
                </div>
                <div className="product-content pr-0">
                    <div className="pro-cat mb-10">
                        <a href="/">{shop_name}</a>
                    </div>
                    <h4>
                        <Link to={`/product-detail/${product_id}`}>{name}</Link>
                    </h4>
                    <div className="product-meta">
                        <div className="pro-price">
                            <span>{new Intl.NumberFormat('de-DE').format(final_price)}đ</span>
                            <span className="old-price">{new Intl.NumberFormat('de-DE').format(price)}đ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ProductItem