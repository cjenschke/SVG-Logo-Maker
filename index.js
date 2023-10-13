const fs = require('fs');
const inquirer = require('inquirer');



const generateSVG = (text, textColor, shape, shapeColor)=>{
    const svgCode = `<svg width='300' height='200'><text x='50%' y='50%' text-anchor='middle' fill='${textColor}'>${text}</text></svg>`;

    return svgCode;
}
