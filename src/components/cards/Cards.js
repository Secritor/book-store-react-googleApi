import React from "react"
import '../cards/Cards.css'
import Card from "../card/Card";
import ApiService from "../serviсes/ApiServices";


const Cards = (props) => {
  ApiService();
  return (
    <div className="cards-field">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>

  )
};

export default Cards;
