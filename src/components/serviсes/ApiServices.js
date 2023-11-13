import shortid from 'shortid';
import noImage from '../../assets/img/no-image-cover.jpg'


class ApiService{

    _apiBase = 'https://www.googleapis.com/books/v1/volumes?q=';
    _apiKey = 'AIzaSyC94t_G6IWhYkb9HAJ-_Zv-qFh-MaGkT4M';
    books = [];

    getResource = async (url) => {
      let res = await fetch(url);

      if(!res.ok) {
        throw new Error (`Could not fetch ${url}, status ${res.status}`);
      }
      
      return await res.json();
    } 
   
    getBooks = async (startIndex) => {
      const res = await this.getResource(`${this._apiBase}"subject:Drama"&printType=books&startIndex=${startIndex}&maxResults=6&key=${this._apiKey}`);
      return res
    }
    
    // получаю массив книг по категории
    getSelectedBooks = async (category) => {
      const res = await this.getResource(`${this._apiBase}"subject:${category}"&startIndex=0&maxResults=6&key=${this._apiKey}`); 
      this.books = []; 
      for (let i = 0; i < res.items.length; i++) {
        this.books.push((this._transformBooks(res.items[i])));
        
      }  
     
      return this.books;
    }
    
    getPagination = async (activeCategory, startIndex ) => {
      let index =  startIndex * 6
      const res = await this.getResource(`${this._apiBase}subject:${activeCategory}&printType=books&startIndex=${index}&maxResults=6&key=${this._apiKey}`);
      for (let i = 0; i < res.items.length; i++) {
        this.books.push(this._transformBooks(res.items[i]));
      }
      return this.books;
    }
   
    renderRating = (rating) => {
      const fullStars = Math.floor(rating / 1);
      const halfStar = (rating % 1) >= 0.5 ? '★' : '';
      const emptyStars = 5 - fullStars - halfStar.length;
      return '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars);
    }
    id = shortid.generate();
    
     // перезаписываю массив удаляя все лишнее 
    _transformBooks = (books) => {
      return {
            etag: books.etag,
            isbn: books.volumeInfo.industryIdentifiers[0].identifier,
            title: books.volumeInfo.title ? `${books.volumeInfo.title.slice(0, 30)}...` : 'No title',
            author: books.volumeInfo.authors && books.volumeInfo.authors.length > 0 ? books.volumeInfo.authors.join(', ') : 'there is no author',
            description: books.volumeInfo.description ? `${books.volumeInfo.description.slice(0, 90)}...` : 'There is no description for this book',
            thumbnail: books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.thumbnail ? books.volumeInfo.imageLinks.thumbnail : noImage,
            ratingsCount: books.volumeInfo.ratingsCount ? `${books.volumeInfo.ratingsCount} reviews` : 'no reviews',
            averageRating: books.volumeInfo.averageRating ? this.renderRating(books.volumeInfo.averageRating) : null,
            saleInfo: books.volumeInfo.saleInfo && `$${books.volumeInfo.saleInfo.retailPrice}` ? books.volumeInfo.saleInfo.retailPrice : null,
      }
    }
  
    
}

export default ApiService;