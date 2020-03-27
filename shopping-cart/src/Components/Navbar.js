import React from 'react';
import { Link } from "react-router-dom";

const Navbvar = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" href="/"><img src="" style={{width: 40}} alt=""/>BANS.CO</a>    
                <ul className="right">
                    <li style={{listStyle: "none"}}><Link to="/" className="shop text-white w3-display-middle w3-large">Shop</Link></li>                   
                    <li style={{listStyle: "none"}}><Link to="/cart" className="cart text-white w3-display-right w3-margin-right "><i className="material-icons">shopping_cart</i>Cart</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbvar;