class Circle {
    constructor(color) {
      this.color = color;
    }
    generateSVG() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
      }
} 

class Triangle {
  constructor(color) {
    this.color = color;
  }
  generateSVG() {
    return `<polygon points="0,50 25,0 50,50" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }
  generateSVG() {
      return `<rect x="10" y="10" fill="${this.color}" />`;
    }
} 

module.exports = {
  Circle, 
  Triangle, 
  Square
}