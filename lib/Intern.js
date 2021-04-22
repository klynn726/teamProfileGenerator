const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(firstName, lastName, id, email, school) {
    // from module code to extend classes in player file
    super(firstName, lastName, id, email);
    this.school = school;
    this.role = "Intern";
  }
  gitSchool(){
    return this.school;
}
}
module.exports = Intern;