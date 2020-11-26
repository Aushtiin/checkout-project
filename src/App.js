import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ProductList from './components/ProductList'
import CartList from './components/CartList'
import Nav from './components/Nav'
import { message } from 'antd';
import './utils/Antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import compressArray from './utils/ItemCount'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    })();
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const addToCart = (item) => {
    const newCart = [...cart, item]
    const updatedCart = compressArray(newCart);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return message.success('Added to cart successfully');
  }

  const increaseCartCount = (item) => {
    const updatedCart = cart.map((_item) => {
      if (_item.id === item.id) {
        return {
          ...item,
          count : item.count + 1
        }
      }
      return _item
    })
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const decreaseCartCount = (item) => {
    const updatedCart = cart.map((_item) => {
      if (_item.id === item.id) {
        return {
          ...item,
          count : item.count - 1
        }
      }
      return _item
    })
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const deleteProduct = (item) => {
    const updatedCart = cart.filter((_item) => _item.id !== item.id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return message.success('Removed from cart successfully');
  }

  const clearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]))
    return message.success('Cart Cleared');
  }

  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
          >
            <ProductList
              products={products}
              addToCart={addToCart}
            />
          </Route>

          <Route
            exact
            path="/cart"
          >
            <CartList
              cart={cart}
              increase={increaseCartCount} 
              decrease={decreaseCartCount}
              deletee={deleteProduct}
              clear={clearCart}
            />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
