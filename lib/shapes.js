class Circle {
  constructor(color, text = {}) {
    this.color = color;
    this.text = text;
  }

  generateSVG() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />${this.text ? `<text x="150" y="100" text-anchor="middle" fill="${this.text.color}">${this.text.content}</text>` : ''}`;
  }
}

class Triangle {
  constructor(color, text = {}) {
    this.color = color;
    this.text = text;
  }

  generateSVG() {
    return `<polygon points="0,50 25,0 50,50" fill="${this.color}" />${this.text ? `<text x="25" y="50" text-anchor="middle" fill="${this.text.color}">${this.text.content}</text>` : ''}`;
  }
}

class Square {
  constructor(color, text = {}) {
    this.color = color;
    this.text = text;
  }

  generateSVG() {
    return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />${this.text ? `<text x="50" y="60" text-anchor="middle" fill="${this.text.color}">${this.text.content}</text>` : ''}`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
