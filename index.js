const fs = require('fs');
const inquirer = require('inquirer');

const generateSVG = (text, textColor, shape, shapeColor) => {
  const svgCode = `<svg width='300' height='200'><text x='50%' y='50%' text-anchor='middle' fill='${textColor}'>${text}</text></svg>`;

  return svgCode;
};

const writeSVGToFile = (svgCode)=>{
    fs.writeFile('logo.svg', svgCode, (err) =>{
        if (err){
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
    const svgCode = generateSVG(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );
    writeSVGToFile(svgCode);
  })

  .catch((error) => {
    console.error('Error:', error);
  });
