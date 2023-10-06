import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import ApiService from './components/serviсes/ApiServices';
import './index.css';

const apiService = new ApiService()
// получаем всю информацию из списка книг
apiService.getBooks().then(res => console.log(res));
// получаем только id наших книг в виде нового массива
// apiService.getBooks().then(res => console.log(res.items.map(item => item.id)));
// получаем книгу с нужным нам названием 
// apiService.getSelectedBook('water').then(res => console.log(res));
// получаем книгу по коду ISBN
apiService.getBookByISBN("9781108037129").then(res => console.log(res));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


