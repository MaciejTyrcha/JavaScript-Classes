class HigherLiElements{
  constructor() {
    this.fontSize = 10;
    this.liElements = document.querySelectorAll("li");
  }

  makeBigger() {
    this.liElements.forEach(liElement => {
      liElement.style.display = "block";
      liElement.style.fontSize = `${this.fontSize}px`;
    });
    this.fontSize++;
  }
}
const biggerLi = new HigherLiElements();