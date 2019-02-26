class AddTenLiElements{
  constructor() {
    this.buttonFirst = document.createElement("button");
    this.buttonSecond = document.createElement("button");
    this.ulList = document.createElement("ul");
    this.numberOfElements = 10,
    this.number = 1;
    this.fontSize = 10;
  }
  init() {
    document.body.appendChild(this.buttonFirst);
    this.buttonFirst.textContent = "Dodaj 10 elementów listy";
    
    document.body.appendChild(this.buttonSecond);
    this.buttonSecond.textContent = "Wyczyść";

    document.body.appendChild(this.ulList);

    this.buttonFirst.addEventListener("click", this.createLiElements);
    this.buttonSecond.addEventListener("click", this.clearList);
  }

  createLiElements = () => {
    //Jak to z bindem zrobić ?
    const ul = document.querySelector("ul");
    for ( let i = 0; i < this.numberOfElements; i++) {
      const createLi = document.createElement("li");
      createLi.textContent = this.number++;
      createLi.style.fontSize = `${this.fontSize++}px`;
      ul.appendChild(createLi);
    }
  }

  clearList = () => {
    const ul = document.querySelector("ul");
    ul.textContent = "";
    this.number = 1;
    this.fontSize = 10;
  }
}

const AddElements = new AddTenLiElements().init();