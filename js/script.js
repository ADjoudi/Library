let library = [];
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
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
    let newBookString = ` <div class="book">
        <div class="info">
          <div class="image"></div>
          <h3 class="nbrPages">${inputPages.value} pages</h2>
          <h2>${inputTitle.value}</h2>
          <h3>${inputAuthor.value}</h3>
        </div>
        <h2 class="status">read</h2>
      </div>`;
    content.innerHTML += newBookString; // I know, I know
    library.push(book);
    exitForm();
  }
});
