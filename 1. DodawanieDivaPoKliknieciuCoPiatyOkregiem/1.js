class AddingDiv{
  constructor() {
    this.number = 1;
  }

  addDiv() {
    const createDiv = document.createElement("div");
    if ( this.number %5 === 0) {
      createDiv.classList.add("circle");
    }
    createDiv.textContent = this.number;
    this.number++;
    document.body.appendChild(createDiv);
  }
}

const createDiv = new AddingDiv();