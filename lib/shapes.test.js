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

const inquirer = require('inquirer');
const fs = require('fs');

// Mock the inquirer.prompt function to return a specific user input
jest.mock('inquirer');
inquirer.prompt.mockResolvedValue({
  text: 'TestText',
  textColor: 'blue',
  shapeType: 'circle',
  shapeColor: 'red',
});

// Mock the fs.writeFile function to avoid actual file writing
jest.mock('fs');
fs.writeFile.mockImplementation((filename, content, callback) => callback(null));

describe('generateLogo', () => {
    it('should generate a logo', async () => {
      const userInput = {
        text: 'TWD',
        textColor: 'blue',
        shapeType: 'circle',
        shapeColor: 'red',
      };
      await generateLogo(userInput);
    });
  });