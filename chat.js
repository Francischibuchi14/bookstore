const books = [
    { title: "The Great Gatsby", isbn: "9780743273565" },
    { title: "1984", isbn: "9780451524935" },
    { title: "To Kill a Mockingbird", isbn: "9780060935467" },
    { title: "Moby Dick", isbn: "9781503280786" },
    { title: "Pride and Prejudice", isbn: "9781503290563" },
    { title: "The Catcher in the Rye", isbn: "9780316769488" },
];

function searchBook() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(input) || 
        book.isbn.includes(input)
    );

    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <p class="title">${book.title}</p>
                <p class="isbn">ISBN: ${book.isbn}</p>
            `;
            bookList.appendChild(bookItem);
        });
    } else {
        bookList.innerHTML = '<p>No books found.</p>';
    }
}
