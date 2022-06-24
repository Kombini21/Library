let myLibrary = [];
let bookListo = document.getElementById("booksLisuto");


// Define the book constructor // 

function Book(title, author, pages, read ) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

};

// Add book to the array //

function addBookToLibrary(book) {

    myLibrary.push(book);
}

// Create new book data, check if it's already in the array and push to array //

function createNewBookInfo(title,author,pages,read) {


    let book1 = new Book(title, author, pages, read);



    if (myLibrary.some(e => e.title === book1.title)) {
        return 1
        
    } else {

        myLibrary.push(book1);
    }
    }







// Create new book user input //

function userCreateBook() {

    let bookNome = document.getElementById("bTitle").value;
    let bookAutor = document.getElementById("bAuthor").value;
    let bookPaginas = document.getElementById("bPages").value;
    let bookRead = document.getElementById("bRead").value;

    let teste = createNewBookInfo(bookNome,bookAutor,bookPaginas,bookRead);

    if (teste == 1) {
        console.log("book's already on the list.")
    }else {
        bookAddPageLoop();
    }

    }

    





// Update the book list and add new books cards //

function bookAddPageLoop() {


    for (let i = 0; i < myLibrary.length; i++) {

        // Create book card container //
        let bookCard = document.createElement("div");
        bookCard.classList.add("cardContainer");
        bookCard.setAttribute('id',`bookCard${i}`);

        // Check if element is already on the page //

        let all = document.getElementById(`bookCard${i}`);
        if (all !== null) {

        
        } 
        else 
        {
            // Create book card heading //

            let titleHead = document.createElement("p");
            let title = document.createTextNode(myLibrary[i].title);
            titleHead.classList.add("bookTitle");
            titleHead.setAttribute('id', myLibrary[i].title)
            titleHead.appendChild(title);
            bookCard.appendChild(titleHead);

            // Create  book card author //

            let authorTitle = document.createElement("p");
            let autorT = document.createTextNode(myLibrary[i].author);
            authorTitle.classList.add("authorTitle");
            authorTitle.setAttribute('id',myLibrary[i].author);
            authorTitle.appendChild(autorT);
            

            // Create book card pages //

            let bookPages = document.createElement("p");
            let pageT = document.createTextNode(myLibrary[i].pages);
            bookPages.classList.add("bookPages");
            bookPages.setAttribute('id',myLibrary[i].pages);
            bookPages.appendChild(pageT);
            

            // create "read or note" //

            let readYesNo = document.createElement("p");
            let yesNo = document.createTextNode(myLibrary[i].read);
            readYesNo.classList.add("readOrNot");
            readYesNo.setAttribute('id', myLibrary[i].read);
            readYesNo.appendChild(yesNo);

            // add elements to the page //


            bookCard.appendChild(authorTitle)
            bookCard.appendChild(bookPages)
            bookCard.appendChild(readYesNo)
            bookListo.appendChild(bookCard)
        }
    }



}







