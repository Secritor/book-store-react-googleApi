import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.css';
import ApiService from './components/serviсes/ApiServices';
const apiService = new ApiService()
// apiService.getBooks('0').then(res => console.log(res));
// apiService.getBooks('6').then(res => console.log(res));





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


