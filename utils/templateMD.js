// Template for README Mark Down and passes in user input
module.exports = (readmeDetail) => {
  return `  
${readmeDetail.map((x) => {
  return `
# ${x.title}
  
${licenseBadge(x.license)}

## Description:
${x.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${x.installation}

## Usage
${x.usage}

## License
${x.license}
${licenseLink(x.license)}

## Contributing
${x.contributing}

## Tests
${x.tests}

## Questions
You may view my github: https://github.com/${x.github}
<br>Or for question, you may contact me at: ${x.email}
`;
})}
`;
};

//returns a license badge based on which license is passed in; If there is no license, returns an empty string
function licenseBadge(badgeDetail) {
  switch (badgeDetail) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "Mozilla":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
    case "Eclipse":
      return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
    case "ISC":
        return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    default:
      return "";
  }
}

//returns the license link
function licenseLink(linkDetail) {
  switch (linkDetail) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Mozilla":
      return "https://opensource.org/licenses/MPL-2.0";
    case "Eclipse":
      return "https://opensource.org/licenses/EPL-2.0";
    case "ISC":
        return "https://opensource.org/licenses/ISC";
    default:
      return "";
  }
}