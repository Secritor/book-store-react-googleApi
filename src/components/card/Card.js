import React from "react"
import '../card/Card.css'
import cardThumbnail from '../../assets/img/card-cover.png';
import bookRateStar from '../../assets/icons/Star.svg'
import ApiService from "../serviсes/ApiServices";


const Card = ({props}) => {
  return (
    <div className="card">
          <img className="book-thumbnail" src={cardThumbnail} alt="card thumbnail" />
          <div className="card-info">
            <p className="book-author">Kevin Kwan</p>
            <p className="book-title">Crazy rich asians</p>
            <div className="book-rate">
              <div className="book-stars">
                <img src={bookRateStar} alt="stars" />
                <img src={bookRateStar} alt="stars" />
                <img src={bookRateStar} alt="stars" />
                <img src={bookRateStar} alt="stars" />
              </div>
              <p className="reviews-count">252 review</p>
            </div>
            <p className="book-discr">
            the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...
            </p>
            <div className="book-price">$4.99</div>
            <button className="card-button">buy now</button>
          </div>
        </div>
  )
};

export default Card;
