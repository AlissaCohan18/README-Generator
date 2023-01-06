// Template for README Mark Down
    module.exports = readmeDetail => {
     return `
         ${readmeDetail.map((x) => {
          return `
          ## ${x.title}
          

          ## Project Description:
          ${x.description}
          
          ## Deployed Site
          ${x.url}
        `;
        })
        }
        `;
};



