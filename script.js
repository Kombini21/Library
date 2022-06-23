let myLibrary = ["Bible","Musashi","Zen"];


// Define the book constructor // 

function Book(title, author, pages, read ) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

// Add book to the array //

function addBookToLibrary(book) {

    myLibrary.push(book);


}




pageBooks = document.getElementById('booksLisuto')


// Update the book list and add new books cards //

function bookLoop() {

    for (let i = 0; i < myLibrary.length; i++) {

        // Create book card container //
        let bookCard = document.createElement("div");
        bookCard.classList.add("cardContainer");
        bookCard.setAttribute('id',`bookCard${i}`);
        
        // Create book card heading //

        let titleHead = document.createElement("p");
        let title = document.createTextNode(myLibrary[i]);
        titleHead.appendChild(title);
        bookCard.appendChild(titleHead);

        // Create  book card author //

        let authorTitle = document.createElement("p");
        authorTitle.classList("authorTitle");
        authorTitle.setAttribute('id',`title${}`)

    }



}