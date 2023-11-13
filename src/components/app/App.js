import React, {Component} from 'react';
import './App.css';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import Filter from '../filter/Filter';
import Cards from '../cards/Cards';
import ApiService from "../serviсes/ApiServices";

import imgBannerFirst from '../../assets/img/banner.png';
import imgBannerSecond from '../../assets/img/banner2.png';
import imgBannerThird from '../../assets/img/banner3.png';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: null,
      activeCategory: null,
      bookList: [],
      addedToCart: 0,
      itemsAddedToCart: [],
      lazyLoadingCount: 1,
    }
  }
 
  slides = [
    {url: `${imgBannerFirst}`},
    {url: `${imgBannerSecond}`},
    {url: `${imgBannerThird}`},
  ]

  apiService = new ApiService();
  
  // callback для изменения state в родительском компоненте и дальнейшей передачи этого state в другие компоненты
  handleCategoryClick = async (category, activeCategory ) => {
    const books = await this.apiService.getSelectedBooks(category, this.state.lazyLoadingCount, activeCategory );
    this.setState((prevState) => ({
      selectedCategory: category,
      bookList: books,
      activeCategory: category,
      lazyLoadingCount: prevState.lazyLoadingCount = 1,
    }));
  }

  // callback для изменения state в родительском компоненте и дальнейшей передачи этого state в другие компоненты
  PaginationClick = async () => {
    const books = await this.apiService.getPagination(this.state.activeCategory, this.state.lazyLoadingCount);
    this.setState((prevState) => ({
      lazyLoadingCount: prevState.lazyLoadingCount + 1,
      bookList: books,
    }));
  }

  // callback для получения и добавлении книги в список который будет храниться в localstorage + изменения счетчика корзины
  addedToCart = (book) => {
    let updatedItemsAddedToCart = [...this.state.itemsAddedToCart];
  
    // Проверяем, есть ли уже такой товар в корзине
    const index = updatedItemsAddedToCart.findIndex(item => item.id === book.id);
    if (index !== -1) {
      // Если товар уже есть в корзине, удаляем его
      updatedItemsAddedToCart.splice(index, 1);
    } else {
      // Иначе добавляем товар в корзину
      updatedItemsAddedToCart = [...updatedItemsAddedToCart, book];
    }
  
    this.setState({
      addedToCart: updatedItemsAddedToCart.length,
      itemsAddedToCart: updatedItemsAddedToCart,
    }, () => {
      localStorage.setItem('itemsAddedToCart', JSON.stringify(updatedItemsAddedToCart));
    });
  }
  
  // получаю из locastorage книги которые добавил в корзину и загружаю их в список при каждом монтировании компонента
  componentDidMount() {
    const itemsAddedToCart = JSON.parse(localStorage.getItem('itemsAddedToCart')) || [];
    this.setState({
      itemsAddedToCart: itemsAddedToCart,
      addedToCart: itemsAddedToCart.length,
    });
  }
 
    render () {
      
      return (
        <div className='App'>
          
          <Header className="nav"addedToCart={this.state.addedToCart}/>
          <Slider slides={this.slides}/>
            <div className='Shop'>
              <Filter
               onCategoryClick={this.handleCategoryClick}
               activeCategory={this.state.activeCategory}
               />
              <Cards
               bookList={this.state.bookList}
               onCardClick={this.addedToCart}
               onPaginationClick={this.PaginationClick}
               activeCategory={this.state.activeCategory}
               />
            </div>
          
        </div>
      );
    }
      
 
}

export default App;

