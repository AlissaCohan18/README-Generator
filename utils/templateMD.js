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
          ${licenseBadge(x.license)}

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

function licenseBadge(badgeDetail) {
     switch (badgeDetail) {
      case "MIT":
        return "I used MIT";
      case "Apache":
        return "I used Apache";
      default:
        return "I used ISC";
    }
  };
