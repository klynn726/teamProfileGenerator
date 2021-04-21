const inquirer = require('inquirer');

class Manager {
  constructor(firstName, lastName, id, email, officeNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = email;
    this.officeNumber;
    this.role = "Manager";
  }
  getName(){
    return (`${this.firstName} ${this.lastName}`);
  };
  getId(){
    return this.id;
  };
  getEmail(){
    return this.email;
  };
  getRole(){
    return this.role;
  }
}

module.exports = Manager;