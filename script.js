let myLibrary = ["Bible","Musashi","Zen"];

function Book() {

}

function addBookToLibrary(book) {

    myLibrary.push(this.book)


}


let deleteButton = document.createElement("button") 









pageBooks = document.getElementById('booksLisuto')

for (let i = 0; i < myLibrary.length; i++) {

    let bookHead = document.createElement("h3");
    let bookz = document.createTextNode(myLibrary[i]);
    bookHead.appendChild(bookz)

    pageBooks.appendChild(bookHead)
    
}