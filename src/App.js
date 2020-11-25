import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ProductList from './components/ProductList'
import CartList from './components/CartList'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import compressArray from './utils/ItemCount'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const updatedCart = compressArray(cart);

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    })()
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }
  console.log(cart);

  return (
    <Router>
      <>
        <header>
          <Link to="/cart" className="cart" >
            <i className="fas fa-cart-plus"></i>
          </Link>
        </header>
        <Switch>
          <Route
            exact
            path="/"
          >
            <ProductList products={products} addToCart={addToCart} />
          </Route>

          <Route
            exact
            path="/cart"
          >
            <CartList cart={updatedCart} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
