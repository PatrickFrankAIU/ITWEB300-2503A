class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

}

function bookFunc(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

}

//Function objects are an outdated version of the newer and more polished classes. The introduction of classes fixed many issues that are present in function objects,
//mainly those of inheritance and method sharing.