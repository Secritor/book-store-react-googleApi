import React from 'react';
import style from './Card.module.css';

const Card = () => {
  return (
    <div className={style.card}>
      <img className={style.book_thumbnail} src={null} alt="card thumbnail" />
      <div className={style.card_info}>
        <p className={style.book_author}>Author</p>
        <p className={style.book_title}>Book title</p>
        <div className={style.book_rate}>
          <div className={style.book_stars}>4 stars</div>
          <p className={style.reviews_count}>50 reviews</p>
        </div>
        <p className={style.book_descr}>some short description</p>
        <div className={style.book_price}>40$</div>
        <button className={style.card_button}>buy</button>
      </div>
    </div>
  );
};

export default Card;
