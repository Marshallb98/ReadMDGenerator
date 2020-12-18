// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description 

${data.description}


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.install}


## Usage 

This is going to be where you want to add the imagery to your README to really give it life

${data.usage}


## License

${data.license}

![License](https://img.shields.io/badge/License-${data.license}-red)


## Contributing

${data.guidelines}


## Tests

${data.test}


## Questions

Feel free to reach out to me at anytime if you have any questions or input on this!

${data.email}

[GitHub](https://github.com/${data.gituser})

---


`;
}

module.exports = generateMarkdown;
