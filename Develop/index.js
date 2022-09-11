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
    'What is your GitHub username?',
    'What is your e-mail?',
    'What tests have you run in your app?',
    'Who are your contributors?'


];

const filename = 'README.md';

 var data = {
    title: '',
    description: 'DESCRIPTION',
    descriptionInput: '',
    tableOfContents:'TABLE OF CONTENTS',
    installation: 'INSTALLATION',//create steps option
    installationInput:'',
    usage: 'USAGE',
    usageInput: '',
    lisence: 'LICENSE',
    contributing: 'CONTRIBUTING',
    contributingInput: '',
    tests: 'TESTS',
    testsInput: '',
    questions: 'FAQ',
    contactInfo: 'Feel free to reach me via my carriar pigeon, Hank.',
    github: '',
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

   console.log('hello world!');
    data.title = prompt(questions[0]);
    console.log(`My project title is ${data.title}`);

    data.descriptionInput = prompt(questions[1]);
    console.log(`My project is about ${data.descriptionInput}`);

    data.installationInput = prompt(questions[2]);
    console.log(`To install my project ${data.installationInput}`);

    data.usageInput = prompt(questions[3]);
    console.log(`Here's an example of usage: ${data.usageInput}`); //input screenshot here?

    while (!LICENSES.includes(data.license)) {
        data.license = prompt(questions[4]);
    }
    console.log(`This is your license: ${data.license}`);

    data.github = prompt(questions[5]);
    console.log(`This is your github url: ${data.github}`);

    data.emailAddress = prompt(questions[6]);
    console.log(`This is your email: ${data.emailAddress}`);

    data.testsInput = prompt(questions[7]);
    console.log(`This is your email: ${data.testsInput}`);

    data.contributingInput = prompt(questions[8]);
    console.log(`Your tests: ${data.contributingInput}`);

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

