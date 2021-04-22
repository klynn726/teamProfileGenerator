const inquirer = require('inquirer');

const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

class TeamBuilder {
  
   initalizeApp = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'What is your first name? (Required)',
        validate: firstName => {
          if (firstName) {
            return true;
          } else {
            console.log('Please enter your first name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'What is your last name? (Required)',
        validate: lastName => {
          if (lastName) {
            return true;
          } else {
            console.log('Please enter your last name.');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'id',
        message: 'What is your ID number? (Required)',
        validate: id => {
          if (id) {
            return true;
          } else {
            console.log('Please enter your ID number.');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (Required)',
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log('Please enter your email address.');
            return false;
          }
        }
      },

      {
        type: 'list',
        name: 'role',
        message: 'What is your role? (Required)',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
        validate: role => {
          if (role) {
            return true;
          } else {
            console.log('Please enter your role.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is your school?',
      },
    ])};
  

  };

    module.exports = TeamBuilder;

    // this will only accept one team member, this needs to be an object or array
// this was taken as base code to refactor from last assignment/module
// check module 9 project (not assignment) for an example of how to
// make arrays/objects and push to html file


//     writeFile = fileContent => {
//       return new Promise((resolve, reject) => {
//         fs.writeFile(`./dist/${output}`, fileContent, err => {
//           if (err) {
//             reject(err);
//             return;
//           }
    
//           resolve({
//             ok: true,
//             message: 'File created!'
//           });
//         });
//       });
//     };

//     promptUser()
// .then(answers => {
//   readMe =  generateMarkdown(answers);
//   writeFile(readMe)
// })
// .catch(err => {
//   console.log(err);
// });