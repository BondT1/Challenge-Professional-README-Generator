// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `(https://img.shields.io/badge/license-${license}-blue)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'do not use license') {
    return`
    [${license}] - (https://choosealicense.com/licenses/${license})`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'do not use license') {
    return `
  ## [license]

  The license covering this project is ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// Adds license to 
function TOCLicense(license) {
  if (license !== 'do not use license') {
    return `
    * [license](#license)`;
  } else {
    return '';
  }
}

function contributorsSec(contConfirm, data) {
  if (!contConfirm) {
    return ''
  } else {
    return `${data}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
 
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
${TOCLicense(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description]

  ${data.whatProject}

  ${data.projectPurpose}

  ${data.projectFeatures}
 
  ## [Installation]

  ${data.installation}
 
  ## [Usage]

  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ## [Contributing]
  
  ${contributorsSec(data.contConfirm, data.contributors)}
 
  ## [Tests]

  ${data.tests}
 
  ## [Questions]

  Contact links:

  Github - (https://github.com/${data.githubUsername})

  Email - ${data.emailAddress}

`;
}

module.exports = generateMarkdown;
