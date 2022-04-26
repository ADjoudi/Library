let library = [];
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
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
    const bookInterface = document.createElement("div");
    bookInterface.classList.add("book");

    const bookInfoInterface = document.createElement("div");
    bookInfoInterface.classList.add("info");
    const bookImageInterface = document.createElement("div");
    bookImageInterface.classList.add("image");
    const nbrPagesInterface = document.createElement("h3");
    nbrPagesInterface.classList.add("nbrPages");
    nbrPagesInterface.textContent = inputPages.value;
    const bookTitleInterface = document.createElement("h2");
    bookTitleInterface.textContent = inputTitle.value;
    const bookAuthorInterface = document.createElement("h3");
    bookAuthorInterface.textContent = inputAuthor.value;

    bookInfoInterface.appendChild(bookImageInterface);
    bookInfoInterface.appendChild(nbrPagesInterface);
    bookInfoInterface.appendChild(bookTitleInterface);
    bookInfoInterface.appendChild(bookAuthorInterface);

    const bookReadStatus = document.createElement("h2");
    bookReadStatus.classList.add("status");
    bookReadStatus.textContent = "Read";

    bookInterface.appendChild(bookInfoInterface);
    bookInterface.appendChild(bookReadStatus);

    content.appendChild(bookInfoInterface);
    library.push(book);
    exitForm();
  }
});
