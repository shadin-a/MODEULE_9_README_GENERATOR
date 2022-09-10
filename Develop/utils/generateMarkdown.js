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
  licensed by ${licenseLink}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(structuredData) {
  var licenseSection = renderLicenseSection(structuredData.license);
  var licenseBadge = renderLicenseBadge(structuredData.license);

  return `
  # ${structuredData.title}
  ## ${licenseBadge}
  ${structuredData.description}
  ## ${structuredData.installation}
  ${structuredData.installationInput}
  ## ${structuredData.usage}
  ![alt text for image](myappscreenshot.png)
  ${licenseSection}
  `;
  
}

module.exports = generateMarkdown;
