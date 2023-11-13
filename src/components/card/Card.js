import React, {Component} from "react"
import '../card/Card.css'



class Card extends Component {
  state = {
    buttonText: 'buy now',
    buttonIsCliled: false,
    buttonStyle: 'card-button'
  }

  handleClick = () => {
     
      const { id, thumbnail, author, title, description, ratingsCount, averageRating, saleInfo } = this.props;
      this.props.onCardClick({
        id,
        thumbnail,
        author,
        title,
        description,
        ratingsCount,
        averageRating,
        saleInfo
      });   
      this.setState((prevState) => ({
        buttonText: prevState.buttonIsCliled ? 'buy now' : 'in the cart',
        buttonIsCliled: !prevState.buttonIsCliled,
        buttonStyle: prevState.buttonIsCliled ? 'card-button' : 'in-the-cart'
      }));
  }
  
  
  render () {
    const {
      title,
      author,
      description, 
      thumbnail,
      ratingsCount,
      averageRating,
      saleInfo,
     } = this.props;

    return (
    <div className="card">
          <img className="book-thumbnail" src={thumbnail} alt="card thumbnail" />
          <div className="card-info">
            <p className="book-author">{author}</p>
            <p className="book-title">{title}</p>
            <div className="book-rate">
              <div className="book-stars">
                {averageRating}
              </div>
              <p className="reviews-count">{ratingsCount}</p>
            </div>
            <p className="book-discr">
            {description}
            </p>
            <div className="book-price">{saleInfo}</div>
            <button onClick={this.handleClick} className={this.state.buttonStyle}>{this.state.buttonText}</button>
          </div>
        </div>
    )
  }
  
};

export default Card;
