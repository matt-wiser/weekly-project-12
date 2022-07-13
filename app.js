const inquirer = require('inquirer');
const cTable = require("console.table");
const db = require('./db/connection');

const {initialQuestions, employeeQuestions, roleQuestions, departmentQuestions} = require('./lib/questionArrays');
const { ui } = require('inquirer');
const { prompt } = require('inquirer');


function init(){
    inquirer.prompt(initialQuestions)
    .then(response =>{
        if (response.actionSelection === 'View all departments') {
            // Display all departments
        } 
        if (response.actionSelection === 'View all roles') {
            // Display all roles
        } 
         if (response.actionSelection === 'View all employees') {
            // Display all employees
        } 
        if (response.actionSelection === 'Create a deparment') {
            inquirer.prompt(departmentQuestions)
            .then(response => {
                // createNewDepartment(response)
                console.log(response);
            });
        } 
        if (response.actionSelection === 'Create a role') {
            inquirer.prompt(roleQuestions)
            .then(response => {
                
            })
        } 
        if (response.actionSelection === 'Create an employee') {
            inquirer.prompt(employeeQuestions)
            .then(response => {

            })
        } 
        if (response.actionSelection === 'Update an employee role'){
            // Edit an employees role
        }
        if (response.actionSelection === 'Exit the program') {
            //exit application
            console.log("GOODBYE");
        }
    });
}
init();


