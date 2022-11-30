// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return // badge url
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'do not use license') {
    return`
    [${license}]` // license link 

    
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

  The license used for this project is ${renderLicenseLink(license)}`;
  } else {
    return '';
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
  // license
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
  
  // needs work
 
  ## [Tests]

  ${data.tests}
 
  ## [Questions]

  Contact links:

  Github - (https://github.com/${data.githubUsername})

  Email - ${data.emailAddress}

`;
}

module.exports = generateMarkdown;
