const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to 3 characters):',

        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (e.g. red, #ff0000, rgb(255,0,0)):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (e.g. red, #ff0000, rgb(255,0,0)):',
        }
    ]);

    return answers;

}

function generateSVG({ text, textColor, shape, shapeColor }) {
    let selectedShape;
}