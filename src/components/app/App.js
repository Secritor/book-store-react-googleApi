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
    }
  }
 
  slides = [
    {url: `${imgBannerFirst}`},
    {url: `${imgBannerSecond}`},
    {url: `${imgBannerThird}`},
  ]

  apiService = new ApiService();
  

  handleCategoryClick = async (category) => {
    const books = await this.apiService.getSelectedBooks(category);
    this.setState((prevState) => ({
      selectedCategory: category,
      bookList: books,
      activeCategory: prevState.selectedCategory === category ? null : category,
    }));
  }


  addedToCart = () => {
    console.log('click');
    this.setState({
      addedToCart: this.state.addedToCart + 1,
    })
  }

 
    render () {
      
      
      return (
        <div className='App'>
          
          <Header addedToCart={this.state.addedToCart}/>
          <Slider slides={this.slides}/>
            <div className='Shop'>
              <Filter
               onCategoryClick={this.handleCategoryClick}
               activeCategory={this.state.activeCategory}
               />
              <Cards
               bookList={this.state.bookList}
               onCardClick={this.addedToCart}
               />
            </div>
          
      

        </div>
      );
    }
      
  
 

 
}

export default App;

