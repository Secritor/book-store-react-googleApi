import React, {Component} from "react"
import '../card/Card.css'
import cardThumbnail from '../../assets/img/card-cover.png';
import bookRateStar from '../../assets/icons/Star.svg'
import ApiService from "../serviсes/ApiServices";


class Card extends Component {
  constructor(props) {
    super(props)

    this.updateBook();
  }


  state = {
    title: null,
    author: null,
    description: null,
    thumbnail: null,


    averageRating: null,
    ratingsCount: null,
    saleInfo: null
  }



  apiService = new ApiService();
 

  updateBook = () => {
    // const id = "9781108037129"
    
    const code = '';
    

    this.apiService
        .getBookByISBN(code)
        .then(res => {
          this.setState({
            title: res.items[0].volumeInfo.title,
            author: res.items[0].volumeInfo.authors[0],
            description: res.items[0].volumeInfo.description,
            thumbnail: res.items[0].volumeInfo.imageLinks.thumbnail,
          })
        })
        .catch(err => {
          // handle error
        });
        
  }
 

  render () {
    const {title, author, description, thumbnail } = this.state;
    return (
    <div className="card">
          <img className="book-thumbnail" src={thumbnail} alt="card thumbnail" />
          <div className="card-info">
            <p className="book-author">{author}</p>
            <p className="book-title">{title}</p>
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
            {description}
            </p>
            <div className="book-price">$4.99</div>
            <button className="card-button">buy now</button>
          </div>
        </div>
  )
  }
  
};

export default Card;
