DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;



CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    salary DECIMAL,
    department_id INTEGER,
    CONSTRAINT fk_id FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INTEGER
);