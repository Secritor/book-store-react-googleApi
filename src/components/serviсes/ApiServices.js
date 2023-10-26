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

    getBooks = async () => {
      // получаю общий обьект от api и записываю его в res
      const res = await this.getResource(`${this._apiBase}flower+subject:history&maxResults=6&key=${this._apiKey}`);

      // сюда будем записывать нужные нам данные(локально)
      // this.books = [];

      // перебираю массив внутри обьекта по кол-ву книг и записываю деструктуризированные данные в массив с книгами
      // for (let i = 0; i < res.items.length; i++) {
      //   this.books.push(this._transformBooks(res.items[i].volumeInfo));
      // }
     
      return res;
      
      
    }
    // получаю массив книг по категории
    getSelectedBooks = async (category) => {
      const res = await this.getResource(`${this._apiBase}"subject:${category}"&maxResults=6&key=${this._apiKey}`);
      
      this.books = [];

      for (let i = 0; i < res.items.length; i++) {
        this.books.push(this._transformBooks(res.items[i].volumeInfo));
      }
      
      return this.books;
    }

    getRandomRatingsCount = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
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
            id: books.id,
            title: books.title ? `${books.title.slice(0, 30)}...` : 'No title',
            author: books.authors && books.authors[0] ? books.authors[0] : 'there is no author',
            description: books.description ? `${books.description.slice(0, 90)}...` : 'There is no description for this book',
            thumbnail: books.imageLinks && books.imageLinks.thumbnail ? books.imageLinks.thumbnail : noImage,
            ratingsCount: books.ratingsCount ? `${books.ratingsCount} reviews` : 'no reviews',
            averageRating: books.averageRating ? this.renderRating(books.averageRating) : '☆☆☆☆☆',
            saleInfo: books.saleInfo && `$${books.saleInfo.retailPrice}` ? books.saleInfo.retailPrice : null,
      }
    }
  

}

export default ApiService;