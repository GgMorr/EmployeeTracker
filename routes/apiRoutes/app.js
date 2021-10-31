// Inquire Questions & Switch Statements
const inquirer = require('inquirer');
const {viewAllEmployees} = require('./employeeRoutes');
const {viewAllDepartments} = require('./departmentRoutes');
const {viewAllRoles} = require('./rolesRoutes');

function questions() {
inquirer
  .prompt([
    {
        type: "list",
        name: "menu",
        message: "What would you like to do? (Use arrow keys to view options)",
        choices: [
            'View All Employees', 
            'View All Departments', 
            'View All Roles',
            'View Employee by ID',
            'Add an Employee',
            'Add a Department',
            'Add a Role',
            'Update an Employee Role'
        ]
    }
  ])
  .then((answers) => {

    switch (answers.menu) {
      case 'View All Employees':
          viewAllEmployees()
          questions();
        break;

      case 'View All Departments':
          viewAllDepartments()
          questions();
        break;

      case 'View All Roles':
          viewAllRoles()
          questions();
        break;

      
      case 'View Employee By ID':
          viewEmpById()
          questions();
        break;

      
      case 'Add Employee':
          addEmployee()
          questions();
        break;

      
      case 'Add Department':
          addDepartment()
          questions();
        break;

      
      case 'Add Role':
          addRole()
          questions();
        break;

       
        case 'Update Employee Role':
          updateRole()
          questions();
         break;
    
      default:
        break;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } 
  })
};

module.exports = questions;