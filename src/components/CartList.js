import React from 'react'
import Product from './Product'
import './Product.css'


const Cart = ({ cart, increase, decrease, deletee, clear }) => {
    return (
        <div>
            <div className="clear-button">
                <button type="button" onClick={() => clear() }>
                    Clear Cart
                </button>
            </div>
            <div className="container">
                {cart.map((item) => (
                    <Product
                        product={item}
                        key={item.id}
                        inCart={true}
                        increase={increase} 
                        decrease={decrease}
                        deletee={deletee}
                    />
                ))}
            </div>
        </div>

    )
}

export default Cart
