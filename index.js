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

    switch (shape) {
        case 'Triangle':
            selectedShape = new Triangle();
            break;
        case 'Circle':
            selectedShape = new Circle();
            break;
        case 'Square':
            selectedShape = new Square();
            break;
    }

    selectedShape.setColor(shapeColor);

    const svgContent = 
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${selectedShape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

    return svgContent;
}

async function init() {
    const answers = await promptUser();
    const svg = generateSVG(answers);

    fs.writeFileSync('logo.svg', svg, 'utf8');
    console.log('Logo created!');
}   

init();
