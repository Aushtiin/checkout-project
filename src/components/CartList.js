import React from 'react'
import { PaystackButton } from "react-paystack"
import { message } from 'antd';
import '../utils/Antd.css';
import Product from './Product'
import './Product.css'


const Cart = ({ cart, increase, decrease, deletee, clear }) => {
    const publicKey = 'pk_test_007418e8d3ef92f2024629205dc0925b2ba91d0e';
    const email = 'customer@checkoutsystem.com';
    const amount = cart.length ? cart.map(item => item.price * item.count).reduce((prev, next) => prev + next) * 100 : 0;

    const componentProps = {
        amount,
        publicKey,
        email,
        text: "Checkout",
        onSuccess: () => {
            clear()
            return message.success('Your items have been paid for successfully.')
        },
        onClose: () => message.success('Ooh sorry to see you go, maybe next time.'),
      }
    
    return (
        <div>
            <div className="clear-button">
                <button type="button" onClick={() => clear() }>
                    Clear Cart
                </button>
                <PaystackButton className='paybutton' {...componentProps} />
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
