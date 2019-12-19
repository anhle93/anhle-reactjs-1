import React from 'react';

export function MiniCartList(props) {
    return (
        <ul className="minicart">
            {
                props.products.map(elm => {
                    return (
                        <li key={elm.name}>
                            <div className="cart-img">
                                <a href="/">
                                    <img src={elm.img_url} alt="" />
                                </a>
                            </div>
                            <div className="cart-content">
                                <h3>
                                    <a href="/">{elm.name}</a>
                                </h3>
                                <div className="cart-price">
                                    <span className="new">$ {elm.final_price}</span>
                                    <span>
                                        <del>${elm.price}</del>
                                    </span>
                                </div>
                            </div>
                            <div className="del-icon">
                                <a href="/">
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </div>
                        </li>
                    );
                })
            }
            <li>
                <div className="total-price">
                    <span className="f-left">Total:</span>
                    <span className="f-right">{props.totalPrice}</span>
                </div>
            </li>
            <li>
                <div className="checkout-link">
                    <a href="/">Shopping Cart</a>
                    <a className="red-color" href="/">Checkout</a>
                </div>
            </li>
        </ul>

    );
}

export default MiniCartList;
