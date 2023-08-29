class Circle {
    constructor(color) {
      this.color = color;
    }
    generateSVG() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
      }
}    

module.exports = {

}