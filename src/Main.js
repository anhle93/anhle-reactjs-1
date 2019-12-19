import React, { useState } from 'react';
// import logo from './logo.svg';
import Layout from './Comp/Layout/Layout';
import ProductList from './Comp/ProductList/ProductList';
import SideBar from './Comp/SideBar/SideBar';
import Search from './Comp/SideBar/Search';
import Register from './Comp/Register/Register';
import Login from './Comp/Login/Login';
import Header from './Comp/Header/Header';
import MiniCartList from './Comp/Cart/MiniCartList';
import Footer from './Comp/Footer/Footer';
import datajson from './data.json';
import Clock from './Comp/Exts/Clock';

function Main() {

    const [addedProduct, setAddedProduct] = useState([]);
    const [productList, setProductList] = useState(datajson.data)
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [users, checkUser] = useState({});

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
            <Header totalProduct={totalProduct} isLogin={users}>
                <MiniCartList products={addedProduct} totalPrice={totalPrice} />
            </Header>\

            <Login />

            <Register />

            <Layout>
                <ProductList list={productList} onClickCart={onClickCartList}></ProductList>
                <SideBar onSortClick={sortClick}>
                    <Search />
                </SideBar>
            </Layout>

            <Footer />

        </React.Fragment>

    );
}

export default Main;
