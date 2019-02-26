class HigherDivWithColour {
  constructor() {
    this.divHeight = 0;
    this.bodyHeight = 10000;
    this.flag = true;
    this.divStyle = {
      backgroundColorRed: "red",
      backgroundColorGreen: "green",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
    }
  }
  createDiv(){
    const div = document.createElement("div");
    document.body.style.height = `${this.bodyHeight}px`
    document.body.appendChild(div);
  }

  higherOnScroll(){
    const div = document.querySelector("div");
    div.style.height = `${this.divHeight}px`;
    div.style.backgroundColor = this.divStyle.backgroundColorRed;
    div.style.position = this.divStyle.position;
    div.style.top = this.divStyle.top;
    div.style.left = this.divStyle.left;
    div.style.width = this.divStyle.width;
    
    if (this.flag === true){
      this.divHeight += 10;
      div.style.backgroundColor = this.divStyle.backgroundColorRed;
    }
    else if ( this.flag === false) {
      this.divHeight -= 10;
      div.style.backgroundColor = this.divStyle.backgroundColorGreen;
    }
    if ( this.divHeight >= 300) {
      this.flag = false;
    }
    else if (this.divHeight <= 0) {
      this.flag = true;
    }
  }
}

const higherDivWithColor = new HigherDivWithColour();
