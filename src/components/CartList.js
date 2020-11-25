import React from 'react'
import Product from './Product'


const Cart = ({ cart }) => {
    return (
        <div className="product-container">
            <div>
                {cart.map((item) => (
                    <Product product={item} key={item.id} inCart={true} />
                ))}
            </div>
        </div>
    )
}

export default Cart
