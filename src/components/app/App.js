import React from 'react';
import './App.css';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import Filter from '../filter/Filter';
import Cards from '../cards/Cards';
import ApiService from '../serviсes/ApiServices';
import imgBannerFirst from '../../assets/img/banner.png';
import imgBannerSecond from '../../assets/img/banner 2.png';
import imgBannerThird from '../../assets/img/banner 3.png';



function App() {
  const slides = [
    {url: `${imgBannerFirst}`},
    {url: `${imgBannerSecond}`},
    {url: `${imgBannerThird}`},
  ]


  return (
    <div className='App'>
      
      <Header/>
      <Slider slides={slides}/>
        <div className='Shop'>
          <Filter/>
          <Cards/>
        </div>
        <button className="load-more">Load more</button>
  

  </div>
  );
}

export default App;



