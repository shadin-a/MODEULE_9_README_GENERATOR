// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const prompt = require('prompt-sync')();
// TODO: Create an array of questions for user input
const LICENSES = ['MIT', 'GPL', 'GPLv3'];
const questions = [ 
    'What is your title?',
    'What is your project about?',
    'How can we install it?',
    'What can we use it for?',
    'Please pick a license from the available options: ' + LICENSES.toString(),
];

const filename = 'README.md';

 var data = {
    title: '',
    description: '',
    tableOfContents:'',
    installation: 'INSTALLATION',//create steps option
    installationInput:'',
    usage: '',
    lisence: '',
    contributing: '',
    tests: '',
    questions: '',
    githubUsername: '',
    emailAddress: '',
}

// TODO: Create a function to write README file
function writeToFile(fileName, markdown) {
    fs.writeFile(filename, markdown, err => {
        if (err) {
          console.error(err);
        } else {
            console.log('file written successfully');
        }
      });
}

function adder(var1, var2) {
    return var1 + var2
}

// TODO: Create a function to initialize app
function init() {
    /*var sum = adder(1, 2);
    console.log('sum: ' + sum);

    var sum2 = adder('hi ', 'hello');
    console.log(sum2);

    var num1 = 10
    var num2 = 20
    console.log(adder(num1, num2));*/

   console.log('hello world!');
    data.title = prompt(questions[0]);
    console.log(`My project title is ${data.title}`);

    data.description = prompt(questions[1]);
    console.log(`My project is about ${data.description}`);

    data.installationInput = prompt(questions[2]);
    console.log(`To install my project ${data.installationInput}`);

    data.usage = prompt(questions[3]);
    console.log(`Here's an example of usage ${data.usage}`); //input screenshot here?

    while (!LICENSES.includes(data.license)) {
        data.license = prompt(questions[4]);
    }
    console.log(`This is your license ${data.license}`);

    const markdown = generateMarkdown(data, 0, 0);
    console.log(markdown);
    writeToFile(filename, markdown);
    
}


// Function call to initialize app
init();


// Below uncomment for testing w/o user input. comment out init
/*data.title = "my title"
data.description = 'my description'
data.installation = 'cool instalation stuff'
data.installationInput = 'more stuff about instalation'
data.usage = 'use my app'
markdown = generateMarkdown(data);
console.log(markdown)
writeToFile(filename, markdown);*/

