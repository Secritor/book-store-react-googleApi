import React from 'react';
import './App.css';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import Filter from '../filter/Filter';
import Cards from '../cards/Cards';
// import ApiService from "../serviсes/ApiServices";

const App = () => {
  return (
    <div className="App">
      <Header className="nav" />
      <Slider slides={null} />
      <div className="Shop">
        <Filter />
        <Cards />
      </div>
    </div>
  );
};

export default App;
