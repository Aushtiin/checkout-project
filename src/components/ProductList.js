import React from 'react';
import Product from './Product'

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-container">
            <div>
                {products.map((product) => (
                    <Product product={product} key={product.id} addToCart={addToCart} inCart={false} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
