function Book(title, author, pages, readed) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

const myLibrary = [
  new Book('Book 1', 'Michael Jordan', 100, true),
  new Book('Book 2', 'Jayson Tatum', 200, false)
];

function addBookToLibrary(title, author, pages, readed) {
  // do stuff here
  let temp = new Book(title, author, pages, readed);
  myLibrary.push(temp);
}

function display() {
  const container = document.querySelector('.containers');
  container.innerHTML = '';
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

const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const closeBtn = document.getElementById('closeBtn');
const confirmBtn = document.getElementById('confirmBtn');
const form = document.querySelector('form');
var submitted = false;

const title_res = document.getElementById('title');
const author_res = document.getElementById('author');
const pages_res = document.getElementById('pages')
const readed_res = document.getElementById('');

showButton.addEventListener("click", () => {
  form.reset();
  submitted = false;
  favDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  favDialog.close();
  form.reset();
});

confirmBtn.addEventListener("click", () => {
  submitted = true;
  favDialog.close();
});

form.addEventListener("submit", (event) => {
  if (submitted == true) {
    event.preventDefault();
    const title_res = document.getElementById('title').value;
    const author_res = document.getElementById('author').value;
    const pages_res = parseInt(document.getElementById('pages').value);
    const readed_res = document.getElementById('readed').checked;
  
    console.log("???????");
  
    addBookToLibrary(title_res, author_res, pages_res, readed_res);
  }
  
});