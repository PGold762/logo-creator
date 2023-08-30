// Const's to use mods
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// User Questions
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter Logo Characters:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color:',
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'What shape would you like?:',
            choices: [
                'Circle', 'Triangle', 'Square'
            ],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color:',
        },
    ];

  // Class to generate each shape type, color, text, and text color
  async function generateLogo(userInput) {
    const { text, textColor, shapeType, shapeColor } = userInput;
    let shape;
  
    switch (shapeType) {
      case 'circle':
        shape = new Circle(shapeColor);
        break;
      case 'square':
        shape = new Square(shapeColor);
        break;
      case 'triangle': 
        shape = new Triangle(shapeColor);
        break;
    }
 
    // Variables for what the SVG is written as
    const svgCode = `<svg width="300" height="200">${shape.generateSVG()}</svg>`;
    const fileName = 'logo.svg';
  
    // Writing the data to the file
    fs.writeFile(fileName, svgCode, (err) => {
      if (err) {
        console.error('Error saving SVG:', err);
      } else {
        console.log(`Generated ${fileName}`);
      }
    });
  }

  // Defines main as a function to trigger the app
  async function main() {
    try {
      const userInput = await inquirer.prompt(questions);
      await generateLogo(userInput);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  main();