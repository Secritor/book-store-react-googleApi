import React , { Component } from "react"
import "./Header.css";
import userIcon from '../../assets/icons/user.svg';
import searchIcon from '../../assets/icons/search.svg';
import shopBagIcon from '../../assets/icons/shop-bag.svg';


class Header extends Component {  
    render () {
    return (
        <div className="header">
            <div className="header-items">
                <div className="header-wrapper">
                    <p className="Header-logo">Bookshop</p>
                <div className="Header-navigation">
                    <a href="/some/valid/uri" style={{color: '#1C2A39'}}>BOOKS</a> 
                    <a href="/some/valid/uri">AUDIOBOOKS</a>
                    <a href="/some/valid/uri">STATIONERY & GIFTS</a>
                    <a href="/some/valid/uri">BLOG</a>
                </div>
                <div className="header-icons">
                    <button className="icon-user"><img src={userIcon} alt="user" /></button>
                    <button className="icon-search"><img src={searchIcon} alt="user" /></button>
                    <button className="icon-shop"><img src={shopBagIcon} alt="user" /></button>
                </div>
                </div>
                
            </div>
            
        </div>
    
        )
    }
 
};

export default Header;