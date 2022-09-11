// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseOption) {
  var badge;
  if (licenseOption === 'MIT') {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseOption === 'GPL') {
    badge = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else if (licenseOption === 'GPLv3') {
    badge = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } 
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link;
  if (license === 'MIT'){
    link = 'https://opensource.org/licenses/MIT'
  } else if (license === 'GPL') {
    link = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else if (license === 'GPLv3') {
    link = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseLink = renderLicenseLink(license);
  return `
  Licensed by ${licenseLink}
  `
}

function getGithubURLAsMarkdown(username) {
    let github = 'https://github.com/'
    let githubURL = github + username;
    return `${githubURL}`;

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(structuredData) {
  var licenseSection = renderLicenseSection(structuredData.license);
  var licenseBadge = renderLicenseBadge(structuredData.license);
  var githubURL = getGithubURLAsMarkdown(structuredData.github);


  return `
  # ${structuredData.title}

  ## ${licenseBadge}

  ## ${structuredData.tableOfContents}
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributing)
  * [Tests](#tests)
  * [FAQ](#questions)


  ## ${structuredData.description}
  ${structuredData.descriptionInput}

  ## ${structuredData.installation}
  ${structuredData.installationInput}
  
  ## ${structuredData.contributing}
  ${structuredData.contributingInput}

  ## ${structuredData.tests}
  ${structuredData.testsInput}

  ## ${structuredData.usage}
  ![App in Use](utils/myappscreenshot.png)

  ## ${structuredData.questions}
  * ${structuredData.emailAddress}
  * ${githubURL}
  * ${structuredData.contactInfo}

  # ${structuredData.lisence}
  ${licenseSection}
  `;
  
}

module.exports = generateMarkdown;
