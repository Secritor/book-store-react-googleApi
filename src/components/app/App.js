import React, {Component} from 'react';
import './App.css';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import Filter from '../filter/Filter';
import Cards from '../cards/Cards';
// import ApiService from "../serviсes/ApiServices";

// import imgBannerFirst from '../../assets/img/banner.png';
// import imgBannerSecond from '../../assets/img/banner2.png';
// import imgBannerThird from '../../assets/img/banner3.png';

const App = () => {
  return (
    <div className="App">
      <Header className="nav" />
      <Slider slides={null} />
      {/* <div className='Shop'>
              <Filter/>
              <Cards/>
            </div> */}
    </div>
  );
};

export default App;
