const inquirer = require("inquirer");
const db = require('../db/connection');


const helperFunctions = {};

helperFunctions.displayDepartments = () => {
    const query = `SELECT * FROM departments`;

    db.query(query, (err, rows) => {
        if (err) {
            db.end();
            return console.log(err);
        }
        db.end();
        return console.table(rows);
    });
    
}

helperFunctions.displayRoles = () => {
    const query = `SELECT * FROM roles`;

    db.query(query, (err, rows) => {
        if (err) {
            db.end();
            return console.log(err);
        }
        db.end();
        return console.table(rows);
    });
}

helperFunctions.displayEmployees = () => {
    const query = `SELECT * FROM employees`;

    db.query(query, (err, rows) => {
        if (err) {
            return console.log(err);
        }
        db.end();
        return console.table(rows);
    });
    
}

helperFunctions.createNewDepartment = response =>  {
    const query = `INSERT INTO departments (name) VALUES (?)`;
    const params = [response.departmentName];
    
    db.query(query, params, (err, result)=> {
        if (err) {
            db.end();
            return console.log("There was a problem creating the department, please try again");
        } else {
            db.end();
            return console.log("You successfully created a department!");
        }
    })
}

helperFunctions.createNewRole = response => {
    const query = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [response.title, response.salary, response.department_id];

    db.query(query, params, (err, result) => {
        if (err) {
            db.end();
            return console.log("There was a problem creating the role, please try again");
        } else {
            db.end();
            return console.log("You successfully created a role!");
        }
    });
}

helperFunctions.createNewEmployee = response => {
    const query = `INSERT INTO employees (first_name, last_name, manager_name, role_id) VALUES (?, ?, ?, ?)`;
    const params = [response.first_name, response.last_name, response.manager_name, response.role_id];

    db.query(query, params, (err, result) => {
        if (err) {
            db.end();
            return console.log("There was a problem creating the employee, please try again");
        } else {
            db.end();
            return console.log("You successfully created an employee!");
        }
    });
}

helperFunctions.updateEmployee = response => {
    const query = `UPDATE employees SET role_id =? WHERE id = ?`;
    const params = [response.role_id, response.id];

    db.query(query, params, (err, result) => {
        if (err) {
            db.end();
            return console.log("There was a problem updating the employee role, please try again");
        } else if (!result.affectedRows) {
            db.end();
            return console.log("No employee found with that id");
        } else {
            db.end();
            return console.log("You successfully updated the employee role!");
        }
    });
}

module.exports = helperFunctions;