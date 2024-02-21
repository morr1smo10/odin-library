const myLibrary = [
  {title: 'Book 1', author: 'Michael Jordan', pages: 100, readed: true},
  {title: 'Book 2', author: 'Jayson Tatum', pages: 200, readed: false}
];

function Book(title, author, pages, readed) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

function addBookToLibrary(title, author, pages, readed) {
  // do stuff here
  let temp = new Book(title, author, pages, readed);
  myLibrary.push(temp);
}

function display() {
  const container = document.querySelector('.containers');
  for (let i = 0; i < myLibrary.length; i++) {
    var temp_book = document.createElement('div');
    temp_book.classList.add('container');

    var temp_book_title = document.createElement('p');
    temp_book_title.textContent = 'Title: ' + myLibrary[i].title;
    temp_book.appendChild(temp_book_title);

    var temp_book_author = document.createElement('p');
    temp_book_author.textContent = 'Author: ' + myLibrary[i].author;
    temp_book.appendChild(temp_book_author);

    var temp_book_pages = document.createElement('p');
    temp_book_pages.textContent = myLibrary[i].pages + ' pages';
    temp_book.appendChild(temp_book_pages);

    var temp_book_readed = document.createElement('button');
    if (myLibrary[i].readed) {
      temp_book_readed.textContent = 'Readed';
    } else {
      temp_book_readed.textContent = 'Not Readed';
    }
    temp_book.appendChild(temp_book_readed);

    container.appendChild(temp_book);
  }
}