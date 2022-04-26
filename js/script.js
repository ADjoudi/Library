let library = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getNbrPages() {
    return this.pages;
  }
  getStatus() {
    return this.isRead;
  }
}

const formContainer = document.querySelector(".formContainer");
const addBtn = document.querySelector(".add");

const form = document.querySelector("form");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputIsRead = document.querySelector("#isRead");
const submitBtn = document.querySelector("button");

const content = document.querySelector(".content");

const createForm = () => {
  formContainer.style.visibility = "visible";
};

const exitForm = () => {
  formContainer.style.visibility = "hidden";
  form.reset();
};

const createBookInterface = (book) => {
  const bookInterface = document.createElement("div");
  const bookInfoInterface = document.createElement("div");
  const bookImageInterface = document.createElement("div");
  const nbrPagesInterface = document.createElement("h3");
  const bookTitleInterface = document.createElement("h2");
  const bookAuthorInterface = document.createElement("h3");
  const bookReadStatus = document.createElement("h2");

  bookInterface.classList.add("book");
  bookInfoInterface.classList.add("info");
  bookImageInterface.classList.add("image");
  nbrPagesInterface.classList.add("nbrPages");
  bookReadStatus.classList.add("status");

  nbrPagesInterface.textContent = `${book.getNbrPages()} pages`;
  bookTitleInterface.textContent = book.getTitle();
  bookAuthorInterface.textContent = book.getAuthor();
  bookReadStatus.textContent = "Read";

  bookInfoInterface.appendChild(bookImageInterface);
  bookInfoInterface.appendChild(nbrPagesInterface);
  bookInfoInterface.appendChild(bookTitleInterface);
  bookInfoInterface.appendChild(bookAuthorInterface);

  bookInterface.appendChild(bookInfoInterface);
  bookInterface.appendChild(bookReadStatus);

  return bookInterface;
};

addBtn.addEventListener("click", () => {
  createForm();
});

formContainer.addEventListener("click", (e) => {
  if (e.target == formContainer) {
    exitForm();
  }
});

submitBtn.addEventListener("click", () => {
  if (
    inputTitle.value != "" &&
    inputAuthor.value != "" &&
    inputPages.value != ""
  ) {
    let book = new Book(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputIsRead.checked
    );

    const bookInterface = createBookInterface(book);
    content.appendChild(bookInterface);
    library.push(book);
    exitForm();
  }
});
