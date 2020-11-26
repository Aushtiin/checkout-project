import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <>
            <div className='Navbar navbar '>
                <div className="container">
                    {/* <ul className='navbar-nav nav-justified w-100 text-center' > */}
                    <li className='nav-item'>
                        <Link to='/' className='home-button d-flex flex-column' >
                            <i class="fas fa-home"></i>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/cart" className="cart d-flex flex-column" >
                            <i className="fas fa-cart-plus"></i>
                        </Link>
                    </li>
                {/* </ul> */}
                </div>
            </div>
        </>
    )
}

export default Nav
