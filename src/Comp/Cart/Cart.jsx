import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
    const [coupon, setCoupon] = useState(0);

    const onChangeCoupon = (e) => {
        if (e.target.value) {
            setCoupon(0.2);
        } else {
            setCoupon(0);
        }
    };

    const proceedToCheckout = () => {
        if (window.confirm('Chọn OK để thanh toán giỏ hàng!')) {
            localStorage.clear();
        }
    }

    return (
        <main>
            {/* breadcrumb-area-start */}
            <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>Shoping Cart</h1>
                                <ul className="breadcrumb-menu">
                                    <li><a href="index.html">home</a></li>
                                    <li><span>Cart</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb-area-end */}
            {/* Cart Area Strat*/}
            <section className="cart-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="/">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                props.cartItems.map(elm => {
                                                    return (
                                                        <tr key={elm.product_id}>
                                                            <td className="product-thumbnail">
                                                                <Link to={`/product-detail/${elm.product_id}`}>
                                                                    <img src={elm.img_url} alt="" />
                                                                </Link>
                                                            </td>
                                                            <td className="product-name"><Link to={`/product-detail/${elm.product_id}`}>{elm.name}</Link></td>
                                                            <td className="product-price"><span className="amount">{new Intl.NumberFormat('de-DE').format(elm.final_price)}</span></td>
                                                            <td className="product-quantity">
                                                                <div className="cart-plus-minus"><input type="text" defaultValue={elm.count} /><div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                            </td>
                                                            <td className="product-subtotal"><span className="amount">{new Intl.NumberFormat('de-DE').format(elm.count * elm.final_price)}</span></td>
                                                            <td className="product-remove"><a onClick={() => props.removeFromCart(props.cartItems, elm)}><i className="fa fa-times" /></a></td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon">
                                                Enter Coupon Code: 
                                                <input id="coupon_code" className="input-text" name="coupon_code" placeholder="Coupon code" type="text" onChange={onChangeCoupon}/>
                                                {/* <button className="btn theme-btn-2" name="apply_coupon" type="button">Apply coupon</button> */}
                                                <span>Mặc định giảm 20% với mọi loại Coupon.</span>
                                            </div>
                                            {/* <div className="coupon2">
                                                <input className="btn theme-btn" name="update_cart" defaultValue="Update cart" type="submit" />
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul className="mb-20">
                                                <li>Subtotal <span>{new Intl.NumberFormat('de-DE').format(props.cartItems.reduce((a, c) => (a + c.final_price * c.count), 0))}đ</span></li>
                                                <li>Total <span>
                                                    {
                                                        new Intl.NumberFormat('de-DE').format(props.cartItems.reduce((a, c) => (a + c.final_price * c.count), 0) * (1 - coupon))
                                                    }đ
                                                </span></li>
                                            </ul>
                                            <a className="btn theme-btn" href='/' onClick={proceedToCheckout}>Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cart Area End*/}
        </main>


    )
}

export default Cart;