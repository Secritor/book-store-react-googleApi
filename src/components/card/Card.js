import React, {Component} from "react"
import '../card/Card.css'
import cardThumbnail from '../../assets/img/card-cover.png';
import bookRateStar from '../../assets/icons/Star.svg'
import ApiService from "../serviсes/ApiServices";
// import { books } from "../serviсes/ApiServices";


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
    const id = "9781108037129"  
    const code = Math.floor(Math.random() * (9781108037129 - 9781108000000) + 9781108030000);

    this.apiService
        .getBookByISBN(code)
        .then(res => {
          this.setState(res)
        })
    // получаю книги по коду isbn
        
    // пытаюсь забрать из массива книги и вставить их поочередно в карточки
        // .getBooks()
        // .then(res => {
        //   this.setState(res)
        // });


      

    // const book = books[Math.floor(Math.random() * books.length)];
    // this.setState(book);

        
  }
 

  render () {
    const {
      title,
      author,
      description, 
      thumbnail
     } = this.state;

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
