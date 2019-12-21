import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Header from './Comp/Header/Header';
import Footer from './Comp/Footer/Footer';
import LoadingComp from './Comp/Loading';
import datajson from './data.json';

// import Layout from './Comp/Layout/Layout';
const Layout = React.lazy(() => import('./Comp/Layout/Layout'));
// import ProductList from './Comp/ProductList/ProductList';
const ProductList = React.lazy(() => import('./Comp/ProductList/ProductList'));
// import ProductDetail from './Comp/ProductDetail/ProductDetail';
const ProductDetail = React.lazy(() => import('./Comp/ProductDetail/ProductDetail'));

// import SideBar from './Comp/SideBar/SideBar';
const SideBar = React.lazy(() => import('./Comp/SideBar/SideBar'));
// import Search from './Comp/SideBar/Search';
const Search = React.lazy(() => import('./Comp/SideBar/Search'));

// import Register from './Comp/Register/Register';
const Register = React.lazy(() => import('./Comp/Register/Register'));
// import Login from './Comp/Login/Login';
const Login = React.lazy(() => import('./Comp/Login/Login'));

// import MiniCartList from './Comp/Cart/MiniCartList';
const MiniCartList = React.lazy(() => import('./Comp/Cart/MiniCartList'));
// import Cart from './Comp/Cart/Cart';
const Cart = React.lazy(() => import('./Comp/Cart/Cart'));

// import NotFound from './Comp/NotFound/NotFound';
const NotFound = React.lazy(() => import('./Comp/NotFound/NotFound'));

function Main() {

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

        <Router>
            <React.Fragment>
                <React.Suspense fallback={<LoadingComp />}>
                    <Header totalProduct={totalProduct}>
                        <MiniCartList products={addedProduct} totalPrice={totalPrice} />
                    </Header>

                    <Switch>
                        <Route
                            path="/(login|dang-nhap)"
                            render={() => {
                                return <Login />
                            }}>
                            {/* <Login /> */}

                        </Route>

                        <Route path="/register" component={Register} />

                        <Route path="/" exact component={Layout}>
                            <Layout>
                                <ProductList list={productList} onClickCart={onClickCartList}></ProductList>
                                <SideBar onSortClick={sortClick}>
                                    <Search />
                                </SideBar>
                            </Layout>
                        </Route>

                        <Route path="/cart" component={Cart} />

                        <Route
                            path="/product-detail/:id"
                        // render={(props) => {
                        //     console.log(props.match.params.id);
                        //     return <ProductDetail id={props.match.params.id}/>
                        // }} 
                            component={ProductDetail}
                        />

                        <Route path="*" component={NotFound} />

                    </Switch>

                    <Footer />
                </React.Suspense>
            </React.Fragment>
        </Router>

    );
}

export default Main;
