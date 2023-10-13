const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./library/shapes');

const generateSVG = (text, textColor, shape, shapeColor) => {
  const svgCode = `<svg width='300' height='200'><text x='50%' y='50%' text-anchor='middle' fill='${textColor}'>${text}</text></svg>`;
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

    const svgCode = generateSVG(text, textColor, shapeInstance.render());
    writeSVGToFile(svgCode);
  })

  .catch((error) => {
    console.error('Error:', error);
  });
