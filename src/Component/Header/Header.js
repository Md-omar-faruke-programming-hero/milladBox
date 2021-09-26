import React from 'react';
import logo from '../../image/milladbox.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container  d-flex mt-3 bg-warning bg-opacity-50">
                <div>
                    <img src={logo} width="50%" alt="" />
                </div>
                <div className="ms-auto">
                    <nav>
                        <a className="me-3" href="/login"><i class="fas fa-sign-in-alt"></i> Login</a>
                        <a href="/reg">Registation</a>
                    </nav>
                    <h1>Millad-Box</h1>
                    <p><i>online sweet shop bangladesh#</i></p>
                </div>
            </div>
            <div>
                <nav className="container nav">
                    <a href="/home">Home</a>
                    <a href="/about">About us</a>
                    <a href="/p">Payment information</a>
                    <a href="/s">Shipping rate</a>
                    <a href="/ss">Shopping Cart</a>
                    <a href="/c">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;