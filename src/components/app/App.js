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
      category: null,
      bookList: [],
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
    this.setState({
      selectedCategory: category,
      bookList: books
    });
  }


 
    render () {
      
      
      return (
        <div className='App'>
          
          <Header/>
          <Slider slides={this.slides}/>
            <div className='Shop'>
              <Filter onCategoryClick={this.handleCategoryClick}/>
              <Cards bookList={this.state.bookList}/>
            </div>
          
      

        </div>
      );
    }
      
  
 

 
}

export default App;

