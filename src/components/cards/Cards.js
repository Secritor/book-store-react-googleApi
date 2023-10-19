import React, { Component } from "react"
import '../cards/Cards.css'
import '../card/Card.css';
import ApiService from "../serviсes/ApiServices";
import bookRateStar from '../../assets/icons/Star.svg'



class Cards extends Component {
  
  state = {
    bookList: [],
  }
  
  apiService = new ApiService();
  


  // получаю массив
  componentDidMount() {
    this.apiService.getSelectedBooks('Architecture')
        .then(this.onBookListLoaded)
        
  }

  // меняю состояние , перезаписываю массив
  onBookListLoaded = (bookList) => {
    this.setState({
        bookList,
    })
  
  }

 

  renderBooks(arr) {
    const books =  arr.map((book) => { 
        // Создаю для каждого элемента массива карточку
        return (
          <div 
          className="card"
          key={book.id}
          >
          <img className="book-thumbnail" src={book.thumbnail} alt="card thumbnail" />
          <div className="card-info">
            <p className="book-author">{book.author}</p>
            <p className="book-title">{book.title}</p>
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
            {book.description}
            </p>
            <div className="book-price">$4.99</div>
            <button className="card-button">buy now</button>
          </div>
        </div>
        )
    });
    // А тут возвращаю весь массив с ренедером карточек
    return (
        <div className="cards-grid">
            {books}
        </div>
    )
    
  }
  
  render () {

    const {bookList} = this.state;
    const books = bookList ? this.renderBooks(bookList) : null;
 
    return (
    <div className="cards-field">
        {books}
    </div>

  )
  }

};

export default Cards;
