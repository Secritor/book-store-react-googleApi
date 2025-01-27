import React, {Component} from 'react';
import '../card/Card.css';

const Card = () => {
  return (
    <div className="card">
      <img className="book-thumbnail" src={null} alt="card thumbnail" />
      <div className="card-info">
        <p className="book-author">{null}</p>
        <p className="book-title">{null}</p>
        <div className="book-rate">
          <div className="book-stars">{null}</div>
          <p className="reviews-count">{null}</p>
        </div>
        <p className="book-discr">{null}</p>
        <div className="book-price">{null}</div>
        <button onClick={this.handleClick} className={this.state.buttonStyle}>
          {this.state.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
