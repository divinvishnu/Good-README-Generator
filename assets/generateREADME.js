function generateREADME({ userName, userEmail, projectTitle, projectDescription, projectInstall, projectRun, projectTest, projectInfo, projectLicense, avatarURL }) {

  return `
  [contributors-shield]: https://img.shields.io/github/contributors/${userName}/${projectTitle}.svg?style=flat-square
  [contributors-url]: https://github.com/${userName}/${projectTitle}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${userName}/${projectTitle}.svg?style=flat-square
  [forks-url]: https://github.com/${userName}/${projectTitle}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${userName}/${projectTitle}.svg?style=flat-square
  [stars-url]: https://github.com/${userName}/${projectTitle}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${userName}/${projectTitle}.svg?style=flat-square
  [issues-url]: https://github.com/${userName}/${projectTitle}/issues
  [license-shield]: https://img.shields.io/github/license/${userName}/${projectTitle}.svg?style=flat-square

  [![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![License][license-shield]][license-url]

  # ${projectTitle}

  ## ${projectDescription}

  ## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Additional Information](#additional-information)
  - [Testing](#tests)
  - [Questions](#questions)
  - [Contributing](#contributing)
  - [License](#license)
  - [Authors](#authors)
  - [Contributors](#contributors)
  - [Acknowledgments](#acknowledgments)

  ## Installation
  Download (and unpack) or clone the repo, then using a CLI run the ${projectInstall} command.

  ## Usage
  Run the application with the CLI command ${projectRun} and follow the prompts.

  ## Testing
  Run the tests with the CLI command ${projectTest}.

  ## Additional Information
  ${projectInfo}

  ## License
  This project is licensed under the ${projectLicense} License - see the [LICENSE.txt](https://github.com/yours-kkuznets/Wheather-Forecast/blob/master/LICENSE.txt) file for details

  ## Contributing
  Please read [CONTRIBUTING.md](https://github.com/${userName}/${projectTitle}/blob/master/CONTRIBUTING.md) for details on the code of conduct, and the process for submitting pull requests.

  ## Questions and Feedback
  Please contact me using one of the following:
  - Github: [<img src="${avatarURL}" height="100" width="100" alt="${userName}"/>](https://gist.github.com/${userName}) 
  - Email: ${userEmail}
  `
}

module.exports = generateREADME;
