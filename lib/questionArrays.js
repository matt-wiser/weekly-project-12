const questions = {}

questions.initialQuestions = [
    {
        type: 'list',
        name: 'action',
        message: 'How would you like to proceed?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Create a deparment', 'Create a role', 'Create an employee', 'Update an employee role', 'Exit the program']
    }
];

questions.employeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: `Please enter the employee's first name`,
        validate: input => {
            if (input) {
                return true;
            } else {
                return "An employee name is required!"
            }
        }
    },
    {
        type: 'input',
        name: 'last_name',
        message: `Please enter the employee's last name`,
        validate: input => {
            if (input) {
                return true;
            } else {
                return "An employee name is required!"
            }
        }
    },
    {
        type: 'input',
        name: 'manager_name',
        message: `Please enter the employee's manager's full name`,
        validate: input => {
            if (input) {
                return true;
            } else {
                return "A manager name is required!"
            }
        }
    },
    {
        type: 'input',
        name: 'role_id',
        message: `Please input a number for the employee's role`,
        validate: input => {
            if (input) {
                return true;
            } else {
                return "An employee role number is required!"
            }
        }
    },
]

questions.roleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for the role you are creating',
        validate: input => {
            if (input) {
                return true;
            } else {
                return "A role name is required!"
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter a salary for the role you are creating',
        validate: input => {
            if (input) {
                return true;
            } else {
                return "A role salary is required!"
            }
        }
    },
    {
        type: 'input',
        name: 'department_id',
        message: 'Input the department for this role: 1-Retail, 2-Development, 3-IT, 4-Legal, 5-HR',
        validate: input => {
            if (input) {
                return true;
            } else {
                return "A department selection is required!"
            }
        }
    }

]

questions.departmentQuestions = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'Please enter the name of the department you would like to create',
        validate: input => {
            if (input) {
                return true;
            } else {
                return "A department name is required!"
            }
        }
    }

]

questions.employeeUpdateQuestions = [
    {
        type: 'input',
        name: 'id',
        message: `Please enter the ID for the employee whose role you'd like to update`,
        validate: input => {
            if (input) {
                return true;
            } else {
                return "An employee ID is required!"
            }
        }
    },
    {
        type: 'input',
        name: 'role_id',
        message: `Please enter the ID for the new role you'd like you give the employee`,
        validate: input => {
            if (input) {
                return true;
            } else {
                return "A role ID is required!"
            }
        }
    }
]

module.exports = questions;