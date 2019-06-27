//Book Constructor
function Book(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
}

//UI Constructor
function UI() {}

UI.prototype.addBooktoList = function(book) {
    const booklist = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    booklist.appendChild(row);
}

UI.prototype.clearfields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Events
document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);

    const ui = new UI();
    ui.addBooktoList(book);
    ui.clearfields();

    e.preventDefault();
})