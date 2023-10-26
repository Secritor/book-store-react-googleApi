import React, { Component } from "react"
import '../cards/Cards.css'
import '../card/Card.css';
import ApiService from "../serviсes/ApiServices";
import bookRateStar from '../../assets/icons/Star.svg'
import Card from '../../components/card/Card'



class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  
    const { bookList } = this.props

    const renderBooks = (arr) => {
      const books =  arr.map((book) => { 
          // Создаю для каждого элемента массива карточку
          return (
            <Card 
              key={book.id}
              thumbnail={book.thumbnail}
              author={book.author}
              title={book.title}
              description={book.description}

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
    const showLoadMoreBtn = bookList && bookList.length > 0 ? <button className="load-more">Load more</button> : null
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
