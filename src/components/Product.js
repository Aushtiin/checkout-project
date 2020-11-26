import React from 'react';
import './Product.css';

function Product({ product, addToCart, inCart, increase, decrease, deletee }) {
    const { title, category, description, price, image, count } = product;

    return (
        <div className="product-container">
            <div className="">
                <div className='product-img'>
                    <img src={image} height="270px" width="200px" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h3>{title}</h3>
                        <h5>{category}</h5>
                        <p>{description} </p>
                    </div>
                    <div className="product-price-btn">
                        <p>₦<span>{price}</span></p>
                        {inCart ? <></> :
                            <button type="button" onClick={() => addToCart(product)}>Add to cart</button>
                        }
                    </div>
                    <span>
                        {inCart && count !== undefined ?
                            <div>
                                <div className="delete-button" >
                                    <span><i onClick={() => deletee(product)} class="fas fa-trash-alt"></i></span>
                                </div>
                                <div className="count">
                                    <span>
                                        <i onClick={() => decrease(product)} class="fas fa-arrow-down"></i>
                                    </span>
                                    {count}
                                    <span><i onClick={() => increase(product)} class="fas fa-arrow-up"></i>
                                    </span>
                                </div>
                            </div>
                            : <></>}
                    </span>
                </div>
            </div>
        </div>
    )

}

export default Product
