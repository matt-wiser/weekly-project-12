const inquirer = require('inquirer');
const cTable = require("console.table");
const db = require('./db/connection');

const {initialQuestions, employeeQuestions, roleQuestions, departmentQuestions} = require('./lib/questionArrays');


function init(){
    inquirer.prompt(initialQuestions)
    .then(response =>{
        if (response.action === 'View all departments') {
            const query = `SELECT * FROM departments`;

            db.query(query, (err, rows) => {
                if (err) {
                    console.log(err);
                }
                console.table(rows);
            });
            db.end();
        } 
        if (response.action === 'View all roles') {
            const query = `SELECT * FROM roles`;

            db.query(query, (err, rows) => {
                if (err) {
                    console.log(err);
                }
                console.table(rows);
            });
        } 
         if (response.action === 'View all employees') {
            const query = `SELECT * FROM employees`;

            db.query(query, (err, rows) => {
                if (err) {
                    console.log(err);
                }
                console.table(rows);
            });
            db.end();
        } 
        if (response.action === 'Create a deparment') {
            inquirer.prompt(departmentQuestions)
            .then(response => {
                // createNewDepartment(response)
                console.log(response);
                db.close();
            });
            db.end();
        } 
        if (response.action === 'Create a role') {
            inquirer.prompt(roleQuestions)
            .then(response => {
                
            })
            db.end();
        } 
        if (response.action === 'Create an employee') {
            inquirer.prompt(employeeQuestions)
            .then(response => {

            })
            db.end();
        } 
        if (response.action === 'Update an employee role'){
            // Edit an employees role
            db.end();
        }
        if (response.action === 'Exit the program') {
            //exit application
            console.log("GOODBYE");
            db.end();
        }
    });
}

init();


