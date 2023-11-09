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
    // функция для проверки ответа с запроса
    getBooks = async (startIndex) => {
      const res = await this.getResource(`${this._apiBase}"subject:Drama"&printType=books&startIndex=${startIndex}&maxResults=6&key=${this._apiKey}`);
      return res
    }
    // получаю массив книг по категории
    getSelectedBooks = async (category) => {
      const res = await this.getResource(`${this._apiBase}"subject:${category}"&startIndex=0&maxResults=6&key=${this._apiKey}`); 
      this.books = []; 
      for (let i = 0; i < res.items.length; i++) {
        this.books.push(this._transformBooks(res.items[i].volumeInfo));
      }  
      console.log(this.books)
      return this.books;
    }
    // функцию getPagination переписать, сократить. Можно сделать проверку на пустой массив в getSelectedBooks, мб сработает. И будет одна функция.
    // почему-то элементы дублируются, может быть дело в api или в том что цикл неправильно перебирает массив, добавив очищение массива, все равно встречаются дубли карточек
    // т.е при каждом новом вызове пагинации не подгружается еще 6 новых карточек к 6и старым, цикл их перебирает и все равно появляются дубли. (возможно дело все таки не в цилке...)
    // p.s сделал два разных запроса через getBooks(стартовый индекс), это api выдает копии. со стартовым индексом 0 и 6 было 2-3 копии в двух разных запросах.

    getPagination = async (activeCategory, startIndex ) => {
      let index =  startIndex * 6
      const res = await this.getResource(`${this._apiBase}subject:${activeCategory}&printType=books&startIndex=${index}&maxResults=6&key=${this._apiKey}`);
      for (let i = 0; i < res.items.length; i++) {
        this.books.push(this._transformBooks(res.items[i].volumeInfo));
      }
      return this.books;
    }
   
    renderRating = (rating) => {
      const fullStars = Math.floor(rating / 1);
      const halfStar = (rating % 1) >= 0.5 ? '★' : '';
      const emptyStars = 5 - fullStars - halfStar.length;
      return '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars);
    }

    
     // перезаписываю массив удаляя все лишнее 
    _transformBooks = (books) => {
      return {
            isbn: books.industryIdentifiers[0].identifier,
            title: books.title ? `${books.title.slice(0, 30)}...` : 'No title',
            author: books.authors && books.authors.length > 0 ? books.authors.join(', ') : 'there is no author',
            description: books.description ? `${books.description.slice(0, 90)}...` : 'There is no description for this book',
            thumbnail: books.imageLinks && books.imageLinks.thumbnail ? books.imageLinks.thumbnail : noImage,
            ratingsCount: books.ratingsCount ? `${books.ratingsCount} reviews` : 'no reviews',
            averageRating: books.averageRating ? this.renderRating(books.averageRating) : null,
            saleInfo: books.saleInfo && `$${books.saleInfo.retailPrice}` ? books.saleInfo.retailPrice : null,
      }
    }
  
    
}

export default ApiService;