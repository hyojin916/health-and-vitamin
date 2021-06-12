import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Pages/Nav/Nav';
import ProductInfoHeader from './Pages/ProductInfoPage/ProductInfoHeader';
import Main from './Pages/MainPage/Main';
import Login from './Pages/AccountPage/Login';
import SignUp from './Pages/AccountPage/SignUp';
import ProductList from './Pages/ProductListPage/ProductList';
import ProductDetail from './Pages/ProductInfoPage/ProductDetail';
import Basket from './Pages/Basket/Basket';
import FavoriteProduct from './Pages/FavoriteProduct/FavoriteProduct';
import Pay from './Pages/PayPage/Pay';
import Success from './Pages/Success/Success';
import './Routes.scss';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        {window.location.pathname !== '/' && <ProductInfoHeader />}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product-list/:id" component={ProductList} />
          <Route exact path="/productInfo/:id" component={ProductDetail} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/favoriteproduct" component={FavoriteProduct} />
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </Router>
    );
  }
}
