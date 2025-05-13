import React from 'react';
import 'styles/App.css';
import Header from 'components/Header.js';
import Slider from 'components/Slider.tsx';
import Filter from 'components/Filter.js';
import Cards from 'components/Cards.js';
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
