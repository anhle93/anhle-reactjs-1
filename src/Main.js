import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Header from './Comp/Header/Header.Container';
import Footer from './Comp/Footer/Footer';
import LoadingComp from './Comp/Loading';
import PrivateRoute from './Comp/PrivateRoute/PrivateRoute';
import LoginRoute from './Comp/Login/LoginRoute';

// import Layout from './Comp/Layout/Layout';
const Layout = React.lazy(() => import('./Comp/Layout/Layout'));
// import ProductList from './Comp/ProductList/ProductList';
const ProductList = React.lazy(() => import('./Comp/ProductList/ProductList.Container'));
// import ProductDetail from './Comp/ProductDetail/ProductDetail';
const ProductDetail = React.lazy(() => import('./Comp/ProductDetail/ProductDetail.Container'));

// import SideBar from './Comp/SideBar/SideBar';
const SideBar = React.lazy(() => import('./Comp/SideBar/SideBar.Container'));
// import Search from './Comp/SideBar/Search';
const Search = React.lazy(() => import('./Comp/SideBar/Search.Container'));

// import Register from './Comp/Register/Register';
const Register = React.lazy(() => import('./Comp/Register/Register.Container'));
// import Login from './Comp/Login/Login';
const Login = React.lazy(() => import('./Comp/Login/Login.Container'));

// import MiniCartList from './Comp/Cart/MiniCartList';
const MiniCartList = React.lazy(() => import('./Comp/Cart/MiniCartList.Container'));
// import Cart from './Comp/Cart/Cart';
const Cart = React.lazy(() => import('./Comp/Cart/Cart.Container'));

// import NotFound from './Comp/NotFound/NotFound';
const NotFound = React.lazy(() => import('./Comp/NotFound/NotFound'));

function Main() {

    return (

        <Router>
            <React.Fragment>
                <React.Suspense fallback={<LoadingComp />}>
                    <Header>
                        <MiniCartList />
                    </Header>

                    <Switch>
                        
                        <LoginRoute path="/(login|dang-nhap)">
                            <Login />
                        </LoginRoute>

                        <Route path="/register" component={Register} />

                        <Route path="/" exact component={Layout}>
                            <Layout>
                                <ProductList></ProductList>
                                <SideBar>
                                    <Search />
                                </SideBar>
                            </Layout>
                        </Route>

                        <Route path="/cart" component={Cart} />

                        {/* <Route
                            path="/product-detail/:id"
                        // render={(props) => {
                        //     console.log(props.match.params.id);
                        //     return <ProductDetail id={props.match.params.id}/>
                        // }} 
                            component={ProductDetail}
                        /> */}
                        <PrivateRoute path="/product-detail/:id">
                            <ProductDetail />
                        </PrivateRoute>

                        <Route path="*" component={NotFound} />

                    </Switch>

                    <Footer />
                </React.Suspense>
            </React.Fragment>
        </Router>

    );
}

export default Main;
