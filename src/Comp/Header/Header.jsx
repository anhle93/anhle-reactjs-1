import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import Clock from '../Exts/Clock';
import {ThemeContext} from '../../ThemeContext';
import { Link } from 'react-router-dom';

function Header(props) {
    const context = useContext(ThemeContext);
    const [userInfo, setUserInfo] = useState({});

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            setUserInfo(user);
        }
    });

    const signOut = async () => {
        await firebase.auth().signOut();
        window.location.href= "/";
    }

    function switchTheme() {
        if (context.defaultTheme === 'white') {
            context.setThemeValue('red');
        } else {
            context.setThemeValue('white');
        }
    };

    return (
        <header>
            <div id="header-sticky" className="header-area box-90 sticky-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
                            <div className="logo">
                                <a href="/"><img src="./assets/logo_shop.png" alt="" /></a>
                            </div>
                            <Clock></Clock>

                            <div className="category-menu">
                                <h4>Category</h4>
                                <ul>
                                    <li><a href="/"><i className="fas fa-shopping-cart"></i> Table lamp</a></li>
                                    <li><a href="/"><i className="fas fa-shopping-cart"></i> Furniture</a></li>
                                    <li><a href="/"><i className="fas fa-shopping-cart"></i> Chair</a></li>
                                    <li><a href="/"><i className="fas fa-shopping-cart"></i> Men</a></li>
                                    <li><a href="/"><i className="fas fa-shopping-cart"></i> Women</a></li>
                                    <li><a href="/"><i className="fas fa-shopping-cart"></i> Cloth</a></li>
                                    <li><a href="/"><i className="fas fa-shopping-cart"></i> Trend</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
                            <div className="main-menu text-center">
                                <nav id="mobile-menu" style={{ display: "block" }}>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                            {/* <a href="./index.html">Home</a> */}
                                        </li>
                                        <li>
                                            <Link to="/">Pages</Link>
                                            {/* <a href="/">Pages</a> */}
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/product-detail">Product Detail</Link>
                                                    {/* <a href="./detail.html">Product Detail</a> */}
                                                </li>
                                                <li>
                                                    <Link to="/login">login</Link>
                                                    {/* <a href="./login.html">login</a> */}
                                                </li>
                                                <li>
                                                    <Link to="/register">Register</Link>
                                                    {/* <a href="./register.html">Register</a> */}
                                                </li>
                                                <li>
                                                    <Link to="/cart">Shoping Cart</Link>
                                                    {/* <a href="./cart.html">Shoping Cart</a> */}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
                            <div className="header-right f-right">
                                <ul>
                                    <li className="search-btn">
                                        <a className="search-btn nav-search search-trigger" href="/"><i className="fas fa-search"></i></a>
                                    </li>
                                    {
                                        userInfo && userInfo.email
                                            ? <li className="login-btn"><a onClick={signOut} href="/"><i className="fas fa-sign-out-alt"></i></a></li>
                                            : <li className="login-btn"><Link to="/login"><i className="far fa-user"></i></Link></li>
                                    }
                                    
                                    <li className="d-shop-cart"><a href="/"><i className="fas fa-shopping-cart"></i>
                                        <span className="cart-count">
                                            {props.totalProduct}
                                        </span></a>
                                        {props.children}
                                    </li>
                                    <li className="search-btn">
                                        <button onClick={switchTheme} style={{ backgroundColor: context.defaultTheme }} >{context.defaultTheme}</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 d-xl-none">
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;