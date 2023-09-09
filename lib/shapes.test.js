const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Circle generates SVG', () => {
    const circle = new Circle('red');
    const svg = circle.generateSVG();
    expect(svg).toEqual(expect.stringContaining('<circle'));
  });

  test('Triangle generates SVG', () => {
    const triangle = new Triangle('blue');
    const svg = triangle.generateSVG();
    expect(svg).toEqual(expect.stringContaining('<polygon'));
  });

  test('Square generates SVG', () => {
    const square = new Square('green');
    const svg = square.generateSVG();
    expect(svg).toEqual(expect.stringContaining('<rect'));
  });
});
