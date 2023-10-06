import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";

const ApiService = () => {
    const [books, setBooks] = useState([]);
    const name = 'world';
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `https://www.googleapis.com/books/v1/volumes?q=${name}&key=AIzaSyCl42xB_WLVC_Ikq26U2xnHIyJZ8kr6NSo`
        );
        console.log(result.data); // выводим полученные данные в консоль
        // setBooks(result.data.items); // сохраняем полученные данные в состояние
      };
      fetchData();
    }, []);
  
    // return <Card books={books} />; // передаем полученные данные в компонент с карточками товара
  };



// class ApiService {
    // _apiKey = 'AIzaSyCl42xB_WLVC_Ikq26U2xnHIyJZ8kr6NSo';
    // _apiBase = 

    // _apiRequest = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${this._apiKey}`;


    // getResource = async (url) => {
    //     let res = await fetch(url);

    //     if(!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // }


    // getAllCharacters = async () => {
        
    //     const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`);
    //     return res.data.results.map(this._transformCharacter)
    // }

    // getCharacter = async (id) => {
    //     const res = await this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`);
    //     return this._transformCharacter(res.data.results[0])
    // }

    // _transformCharacter = (char) => {
    //     return {
    //         id: char.id,
    //         name: char.name,
    //         description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
    //         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    //         homepage: char.urls[0].url,
    //         wiki: char.urls[1].url,
    //         comics: char.comics.itemss
    //     }
    // }
// }


export default ApiService;