import style from 'styles/Header.module.css';
import userIcon from 'assets/icons/user.svg';
import searchIcon from 'assets/icons/search.svg';
import shopBagIcon from 'assets/icons/shop-bag.svg';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_items}>
        <div className={style.header_wrapper}>
          <p className={style.header_logo}>Bookshop</p>
          <div className={style.header_navigation}>
            <a href="/some/valid/uri" style={{color: '#1C2A39'}}>
              BOOKS
            </a>
            <a href="/some/valid/uri">AUDIOBOOKS</a>
            <a href="/some/valid/uri">STATIONERY & GIFTS</a>
            <a href="/some/valid/uri">BLOG</a>
          </div>
          <div className={style.header_icons}>
            <button className="icon-user">
              <img src={userIcon} alt="user" />
            </button>
            <button className="icon-search">
              <img src={searchIcon} alt="user" />
            </button>
            <button className="icon-shop">
              <img src={shopBagIcon} alt="user" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
