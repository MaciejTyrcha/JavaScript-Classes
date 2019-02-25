class AddLiElements {
  constructor() {
    this.ul = document.querySelector("ul");
    this.liNumber = 1;
  }

  addLi() {
    const liElement = document.createElement("li");
    if ( this.liNumber %3 === 0) {
      liElement.classList.add("higherNumber");
    }
    liElement.textContent = this.liNumber;
    this.liNumber += 2;
    this.ul.appendChild(liElement);
  }
}

const addLiElement = new AddLiElements();