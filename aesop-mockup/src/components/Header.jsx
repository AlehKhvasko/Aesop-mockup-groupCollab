import React from 'react';
import logo from '../assets/images/aesop-logo.png';
import './styles/djComponents.css';

const Header = () => {
    return (
        <div className='text' >
            <div id='promo' >
                <a href=""> <h3>Complimentary standard shipping on all orders </h3> </a>
                <p id='plus' > + </p>
            </div>
            <a id='nav-linked' href="">
                <ul className='navbar' >
                    <li>Shop</li>
                    <li>Read</li>
                    <li>Stores</li>
                    <li>Search</li>
                    <li id='login' >Login</li>
                    <li id='cart' > • </li>
                </ul>
            </a>
            <div className='info' >
                <img id='company-name' src={logo} alt="logo" />
                <div className='company-info' >
                    <h1>Formulations for skin, hair, home and body</h1>
                    <p id='sub-info' >Created with sensory pleasure in mind.</p>
                </div>
            </div>
        </div>
    );
}

export default Header

