
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
      this.books = [];

      // перебираю массив внутри обьекта по кол-ву книг и записываю деструктуризированные данные в массив с книгами
      for (let i = 0; i < res.items.length; i++) {
        this.books.push(this._transformBooks(res.items[i].volumeInfo));
      }
     
      return this.books;
     
      
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

    // перезаписываю массив удаляя все лишнее 
    _transformBooks = (books) => {
      return {
            title: books.title,
            author: books.authors[0],
            description: books.description ? `${books.description.slice(0, 90)}...` : 'There is no description for this book',
            thumbnail: books.imageLinks.thumbnail,
      }
    }
  

}

export default ApiService;