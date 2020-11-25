import React from 'react';
import './Product.css';

function Product({ product, addToCart, inCart }) {
    const { title, category, description, price, image, count } = product;
    return (
        <div className="wrapper">
            <div className="product-img">
                <img src={image} height="420" width="327" />
            </div>
            <div className="product-info">
                <div className="product-text">
                    <h1>{title}</h1>
                    <h2>{category}</h2>
                    <p>{description}</p>
                </div>
                <div className="product-price-btn">
                    <p>₦<span>{price}</span></p>
                    {inCart ? <></> :
                        <button type="button" onClick={() => addToCart(product)}>Add to cart</button>
                    }
                </div>
                {inCart && count !== undefined  ? <div>{count}</div> : <></>}
            </div>
        </div>
    )
}

export default Product
