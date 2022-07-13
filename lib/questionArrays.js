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
        type: 'list',
        name: 'test',
        message: 'test',
        choices: ['test', 'test2', 'test3']
    }
]

questions.roleQuestions = [
    {
        type: 'list',
        name: 'test',
        message: 'test',
        choices: ['test', 'test2', 'test3']
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

module.exports = questions;