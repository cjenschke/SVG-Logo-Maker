const fs = require('fs');
const { generateSVG, writeSVGToFile } = require('../index.js');

jest.mock('fs');

describe('SVG Logo Maker', () => {
  describe('generateSVG', () => {
    test('should generate SVG with the given text and color', () => {
      const text = 'Hello';
      const textColor = 'blue';
      const shape = {
        render: jest.fn().mockReturnValue('<circle cx="150" cy="133" r="80" />'),
      };
      const shapeColor = 'red';
      const expected = `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="133" r="80" />fill = "red"<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">Hello</text></svg>`;

      const actual = generateSVG(text, textColor, shape, shapeColor);

      expect(actual).toEqual(expected);
      expect(shape.render).toHaveBeenCalled();
    });
  });

  describe('writeSVGToFile', () => {
    test('should write SVG code to a file', () => {
      const svgCode = `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="133" r="80" />fill = "red"<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">Hello</text></svg>`;

      writeSVGToFile(svgCode);

      expect(fs.writeFile).toHaveBeenCalledWith('logo.svg', svgCode, expect.any(Function));
    });
  });
});