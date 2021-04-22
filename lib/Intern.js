const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(firstName, lastName, id, email, github) {
    // from module code to extend classes in player file
    super(firstName, lastName, id, email);
    this.github = github;
    this.role = "Intern";
  }
  gitHub(){
    return this.github;
}
}
module.exports = Intern;