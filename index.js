const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./library/shapes');

const generateSVG = (text, textColor, shape, shapeColor) => {
    const shapeCode = shape.render();
  const svgCode = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeCode}fill = "${shapeColor}"<text x="150" y="100" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
  return svgCode;
};

const writeSVGToFile = (svgCode) => {
  fs.writeFile('logo.svg', svgCode, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('SVG file generated: logo.svg');
    }
  });
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeInstance;
    switch (shape) {
      case 'circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'square':
        shapeInstance = new Square(shapeColor);
        break;
      default:
        console.error('Invalid shape');
        return;
    }

    const svgCode = generateSVG(text, textColor, shapeInstance, shapeColor);
    writeSVGToFile(svgCode);
  })

  .catch((error) => {
    console.error('Error:', error);
  });
