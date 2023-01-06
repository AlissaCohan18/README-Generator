// Template for README Mark Down
module.exports = (readmeDetail) => {
  return `  
      ${readmeDetail.map((x) => {
        return `
          # ${x.title}
          
          ## Description:
          ${x.description}
          
          ## Table of Contents
          ${x.contents}

          ## Installation
          ${x.installation}

          ## Usage
          ${x.usage}

          ## License
          ${x.license}
          ${licenseBadge(readmeDetail)}

          ## Contributing
          ${x.contributing}

          ## Tests // instructions
          ${x.tests}

          ## Questions
          ${x.questions}
        `;
      })}
        `;
};

function licenseBadge(readmeDetail) {
  readmeDetail.filter((x) => {
    switch (x.license) {
      case "MIT":
        return "I used MIT";
      case "Apache":
        return "I used Apache";
      default:
        return "I used ISC";
    }
  });
}
