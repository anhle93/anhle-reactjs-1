import React from 'react';
import { Link } from 'react-router-dom';

export function MiniCartList(props) {
    
    return (
        <ul className="minicart">
            {
                props.cartItems.map(elm => {
                    return (
                        <li key={elm.name}>
                            <div className="cart-img">
                                {/* <a href="/"> */}
                                    <img src={elm.img_url} alt="" />
                                {/* </a> */}
                            </div>
                            <div className="cart-content">
                                <h3>
                                    <Link to={`/product-detail/${elm.product_id}`}>{elm.name}</Link>
                                </h3>
                                <div className="cart-price">
                                    <span className="new">{elm.count} x {new Intl.NumberFormat('de-DE').format(elm.final_price)}đ</span>
                                    <span> - </span>
                                    <span>
                                        <del>{new Intl.NumberFormat('de-DE').format(elm.price)}đ</del>
                                    </span>
                                </div>
                            </div>
                            <div className="del-icon">
                                <a onClick={() => props.removeFromCart(props.cartItems, elm)}>
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </div>
                        </li>
                    );
                })
            }
            <li>
                <div className="total-price">
                    <span className="f-left">Total: {props.cartItems.length}</span>
                    <span className="f-right">Total price: {new Intl.NumberFormat('de-DE').format(props.cartItems.reduce((a, c) => (a + c.final_price * c.count), 0))}đ</span>
                </div>
            </li>
            <li>
                <div className="checkout-link">
                    <Link to="/cart">Shopping Cart</Link>
                    {/* <a href="/">Shopping Cart</a> */}
                    {/* <a className="red-color" href="/">Checkout</a> */}
                </div>
            </li>
        </ul>

    );
}

export default MiniCartList;
