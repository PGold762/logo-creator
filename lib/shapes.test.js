const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Circle generates SVG', () => {
    const circle = new Circle('red'); // Only pass the color
    const svg = circle.generateSVG();
    expect(svg).toEqual(expect.stringContaining('<circle'));
  });

  test('Triangle generates SVG', () => {
    const triangle = new Triangle('blue'); // Only pass the color
    const svg = triangle.generateSVG();
    expect(svg).toEqual(expect.stringContaining('<polygon'));
  });

  test('Square generates SVG', () => {
    const square = new Square('green'); // Only pass the color
    const svg = square.generateSVG();
    expect(svg).toEqual(expect.stringContaining('<rect'));
  });
});
