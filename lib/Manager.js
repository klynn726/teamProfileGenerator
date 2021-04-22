const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(firstName, lastName, id, email, officeNumber) {
    // from module code to extend classes in player file
    super(firstName, lastName, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  officeNum(){
    return this.officeNumber;
}
}
module.exports = Manager;