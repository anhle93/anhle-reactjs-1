import React, { useState } from 'react';
// import logo from './logo.svg';
import Registers from './Comp/Register/Register';
import Header from './Comp/Header/Header';
import MiniCartList from './Comp/Cart/MiniCartList';
import Footer from './Comp/Footer/Footer';
import './App.css';
import './css/bootstrap.min.css';
import './css/animate.min.css';
import './css/responsive.css';
import './css/default.css';
import './css/style.css';
import datajson from './data.json';

function Register() {

    const [addedProduct, setAddedProduct] = useState([]);
    const [productList, setProductList] = useState(datajson.data)
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);

    const onClickCartList = (product) => {
        setAddedProduct([...addedProduct, product]);

        setTotalPrice(totalPrice + product.final_price);

        setTotalProduct(totalProduct + 1);

    }

    const sortClick = (type) => {
        const products = [...datajson.data];

        switch (type) {
            case 'sortaz':
                setProductList(products.sort((a, b) => a.final_price - b.final_price));
                break;
            case 'sortza':
                setProductList(products.sort((a, b) => b.final_price - a.final_price));
                break;
            case 'sortnameaz':
                setProductList(products.sort((a, b) => {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                }))
                break;
            case 'sortnameza':
                setProductList(products.sort((a, b) => {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                }))
                break;
            case 'filtersale':
                setProductList(products.filter(ele => ele.promotion_percent >= 30))
                break;
            default:
                break;
        }
    }

    return (
        <React.Fragment>
            <Header totalProduct={totalProduct}>
                <MiniCartList products={addedProduct} totalPrice={totalPrice} />
            </Header>

            <Registers />

            <Footer />

        </React.Fragment>

    );
}

export default Register;
