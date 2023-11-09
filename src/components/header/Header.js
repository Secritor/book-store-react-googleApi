import React , { Component } from "react"
import "./Header.css";
import userIcon from '../../assets/icons/user.svg';
import searchIcon from '../../assets/icons/search.svg';
import shopBagIcon from '../../assets/icons/shop-bag.svg';


class Header extends Component {
    



    render () {
    const { addedToCart } = this.props
    const cartItems = addedToCart > 0 ? <div className="header-count">{addedToCart}</div> : null
    return (
        <div className="header">
            <div className="header-items">
                <div className="header-wrapper">
                    <p className="Header-logo">Bookshop</p>
                <div className="Header-navigation">
                    <a href="#" style={{color: '#1C2A39'}}>BOOKS</a> 
                    <a href="#">AUDIOBOOKS</a>
                    <a href="#">STATIONERY & GIFTS</a>
                    <a href="#">BLOG</a>
                </div>
                <div className="header-icons">
                    <button className="icon-user"><img src={userIcon} alt="user" /></button>
                    <button className="icon-search"><img src={searchIcon} alt="user" /></button>
                    <button className="icon-shop"><img src={shopBagIcon} alt="user" /></button>
                    {cartItems}
                </div>
                </div>
                
            </div>
            
        </div>
    
        )
    }
 
};

export default Header;