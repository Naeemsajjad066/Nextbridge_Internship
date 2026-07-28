// =====================
// Book Classes
// =====================

class Book {
    constructor(title, author, isbn) {
        if (new.target === Book) {
            throw new Error("Book is an abstract class. Create a specific book type.");
        }

        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.availability = true;
        this.borrowedBy = null;
        this.dueDate = null;
    }

    getBorrowDuration() {
        throw new Error("Subclasses must implement getBorrowDuration()");
    }

    borrow(member) {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + this.getBorrowDuration());

        this.availability = false;
        this.borrowedBy = member;
        this.dueDate = dueDate;
    }

    returnBook() {
        this.availability = true;
        this.borrowedBy = null;
        this.dueDate = null;
    }
}

class PhysicalBook extends Book {
    getBorrowDuration() {
        return 14;
    }
}

class Ebook extends Book {
    getBorrowDuration() {
        return 7;
    }
}

class ReferenceBook extends Book {
    getBorrowDuration() {
        return 0;
    }

    borrow() {
        throw new Error(`"${this.title}" is a reference book and cannot be borrowed.`);
    }
}


// =====================
// Member Class
// =====================

class Member {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(
            borrowedBook => borrowedBook.isbn !== book.isbn
        );
    }
}


// =====================
// Library Class
// =====================

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
        this.members = [];
    }

    addBook(book) {
        const exists = this.books.some(b => b.isbn === book.isbn);

        if (exists) {
            console.log("Book already exists.");
            return;
        }

        this.books.push(book);
        console.log(`Book "${book.title}" added successfully.`);
    }

    addMember(member) {
        const exists = this.members.some(m => m.id === member.id);

        if (exists) {
            console.log("Member already exists.");
            return;
        }

        this.members.push(member);
        console.log(`Member "${member.name}" added successfully.`);
    }

    findBook(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }

    findMember(id) {
        return this.members.find(member => member.id === id);
    }

    borrowBook(memberId, isbn) {
        const member = this.findMember(memberId);

        if (!member) {
            console.log("Member not found.");
            return;
        }

        const book = this.findBook(isbn);

        if (!book) {
            console.log("Book not found.");
            return;
        }

        if (!book.availability) {
            console.log(`"${book.title}" is already borrowed.`);
            return;
        }

        try {
            book.borrow(member);
            member.borrowBook(book);

            console.log(`\n${member.name} borrowed "${book.title}"`);
            console.log(`Borrow Duration: ${book.getBorrowDuration()} days`);
            console.log(`Due Date: ${book.dueDate.toDateString()}`);

        } catch (error) {
            console.log(error.message);
        }
    }

    returnBook(memberId, isbn) {
        const member = this.findMember(memberId);

        if (!member) {
            console.log("Member not found.");
            return;
        }

        const book = this.findBook(isbn);

        if (!book) {
            console.log("Book not found.");
            return;
        }

        if (book.availability) {
            console.log("This book is not currently borrowed.");
            return;
        }

        if (book.borrowedBy !== member) {
            console.log(`${member.name} didn't borrow this book.`);
            return;
        }

        book.returnBook();
        member.returnBook(book);

        console.log(`\n${member.name} returned "${book.title}"`);
    }

    displayBooks() {
        console.log("\n===== Library Books =====");
        console.log(`Book name === author === Status === Borrowed By`)

        this.books.forEach(book => {
            console.log(
                `${book.title} | ${book.author} | ${
                    book.availability ? "Available" : "Borrowed"
                } | ${book.borrowedBy.name}`
            );
        });
    }

    displayMembers() {
        console.log("\n===== Members =====");

        this.members.forEach(member => {
            console.log(
                `${member.name} | Borrowed Books: ${member.borrowedBooks.length}`
            );
        });
    }
}



import readline from "readline";
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const library = new Library("LMS");

showMenu();

function showMenu() {
    console.log("\n===== Library Management System =====");
    console.log("1. Add Member");
    console.log("2. Add Physical Book");
    console.log("3. Add Ebook");
    console.log("4. Add Reference Book");
    console.log("5. Borrow Book");
    console.log("6. Return Book");
    console.log("7. Display Books");
    console.log("8. Display Members");
    console.log("9. Exit");

    rl.question("Choose an option: ", handleMenu);
}

function handleMenu(choice) {
    switch (choice) {
        case "1":
            addMember();
            break;

        case "2":
            addBook("physical");
            break;

        case "3":
            addBook("ebook");
            break;

        case "4":
            addBook("reference");
            break;

        case "5":
            borrowBook();
            break;

        case "6":
            returnBook();
            break;

        case "7":
            library.displayBooks();
            showMenu();
            break;

        case "8":
            library.displayMembers();
            showMenu();
            break;

        case "9":
            rl.close();
            break;

        default:
            console.log("Invalid Choice");
            showMenu();
    }
}

function addMember(){
    rl.question("Member ID: ",id=>{
        rl.question("Member Name: ",name=>{
            library.addMember(new Member(Number(id),name))
            showMenu()
        })
    })
}

function addBook(type){
    rl.question("ISBN: ",isbn=>{
        rl.question("Title: ",title=>{
            rl.question("Author:",author=>{
                let book
                if(type==="physical"){
                    book=new PhysicalBook(title,author,Number(isbn))
                }else if(type==="ebook"){
                    book = new Ebook(title,author,Number(isbn))
                }else{
                    book=new ReferenceBook(title,author,Number(isbn))
                }
                library.addBook(book)
                showMenu()
            })
        })
    })
}

function borrowBook(){
    rl.question("Member ID: ",memberId=>{
        rl.question("ISBN: ",isbn=>{
            library.borrowBook(Number(memberId),Number(isbn))
            showMenu()
        })
    })
}

function returnBook(){
    rl.question("MemberId:",memberId=>{
        rl.question("ISBN: ",isbn=>{
            library.returnBook(Number(memberId),Number(isbn))
            showMenu()
        })
    })
}
