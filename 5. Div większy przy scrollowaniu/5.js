class HigherDiv{
  constructor(){
    this.flag = true;
    this.size = 100;
    this.div = document.querySelector("div");
  }

  makeDivHigher(){
    this.div.style.height = `${this.size}px`;
    this.div.style.width = `${this.size}px`;

    this.flag === true ? this.size += 10 : this.size -= 10;

    if(this.size >= window.innerHeight / 2) {
      this.flag = false;
    }
    else if (this.size <= 100){
      this.flag = true;
    }
  }
}

const higherDiv = new HigherDiv();
