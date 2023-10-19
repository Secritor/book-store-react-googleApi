import React, {Component} from 'react';
import './App.css';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import Filter from '../filter/Filter';
import Cards from '../cards/Cards';
import imgBannerFirst from '../../assets/img/banner.png';
import imgBannerSecond from '../../assets/img/banner2.png';
import imgBannerThird from '../../assets/img/banner3.png';



class App extends Component {
  
  
  
  
  slides = [
    {url: `${imgBannerFirst}`},
    {url: `${imgBannerSecond}`},
    {url: `${imgBannerThird}`},
  ]

 
    render () {
      return (
        <div className='App'>
          
          <Header/>
          <Slider slides={this.slides}/>
            <div className='Shop'>
              <Filter/>
              <Cards/>
            </div>
            <button className="load-more">Load more</button>
      

        </div>
      );
    }
      
  
 

 
}

export default App;



