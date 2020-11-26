import React from 'react';
import Product from './Product'
import './Product.css'

const ProductList = ({ products, addToCart, }) => {
    return (
        <div className="container">
            {products.map((product) => (
                <Product
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                    inCart={false}
                />
            ))}
        </div>
    )
}

export default ProductList
