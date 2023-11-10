import React, { Component } from "react"
import Card from '../../components/card/Card'
import shortid from 'shortid';
import '../cards/Cards.css'
import '../card/Card.css';




class Cards extends Component {
  constructor(props) {
    super(props);
  }

  handlePagination = () => {
    this.props.onPaginationClick()
  }
  
  render () {
  
    const { bookList, onCardClick, buttonText } = this.props

   
    const renderBooks = (arr) => {
      const books =  arr.map((book) => { 
          // Создаю для каждого элемента массива карточку
          return (
            <Card
              key={book.etag}
              id={book.etag}
              thumbnail={book.thumbnail}
              author={book.author}
              title={book.title}
              description={book.description}
              ratingsCount={book.ratingsCount}
              averageRating={book.averageRating}
              saleInfo={book.saleInfo}
              buttonText={buttonText}
              onCardClick={(data) => onCardClick(data)}
            />
          )
      });
      // А тут возвращаю весь массив с ренедером карточек
      return (
          <div className="cards-grid">
              {books}
          </div>
      )
      
    }
    
    const books = bookList && bookList.length > 0 ? renderBooks(bookList) : <p className="select-category">select a category</p>;
    const showLoadMoreBtn = bookList && bookList.length > 0 ? <button onClick={this.handlePagination} className="load-more">Load more</button> : null
    
    return (
    <div className="cards-field">
      <div className="cards-container">
        {books}
      </div>
      {showLoadMoreBtn}
    </div>

  )
  }

};

export default Cards;
