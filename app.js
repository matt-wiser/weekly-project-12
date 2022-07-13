const inquirer = require('inquirer');
const cTable = require("console.table");
const {initialQuestions, employeeQuestions, roleQuestions, departmentQuestions, employeeUpdateQuestions} = require('./lib/questionArrays');
const  {displayDepartments, displayRoles, displayEmployees, createNewDepartment, createNewRole, createNewEmployee, updateEmployee} = require("./lib/helperFunctions");


function init(){
    inquirer.prompt(initialQuestions)
    .then(response =>{
        if (response.action === 'View all departments') {
            displayDepartments();
        } 
        if (response.action === 'View all roles') {
            displayRoles();
        } 
         if (response.action === 'View all employees') {
            displayEmployees();
        } 
        if (response.action === 'Create a deparment') {
            inquirer.prompt(departmentQuestions)
            .then(response => {
                createNewDepartment(response)
            });
        } 
        if (response.action === 'Create a role') {
            inquirer.prompt(roleQuestions)
            .then(response => {
                createNewRole(response);
            })
        } 
        if (response.action === 'Create an employee') {
            inquirer.prompt(employeeQuestions)
            .then(response => {
                createNewEmployee(response);
            })
        } 
        if (response.action === 'Update an employee role'){
            inquirer.prompt(employeeUpdateQuestions)
            .then(response => {
               updateEmployee(response);
            })
        }
    });
}

init();


