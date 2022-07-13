INSERT INTO departments (name)
VALUES
('Retail'),
('Development'),
('IT'),
('Legal'),
('HR');

INSERT INTO roles (title, salary, department_id)
VALUES
('Cashier', 50000, 1),
('Manager', 60000, 1),
('Janitor', 45000, 1),
('Junior Developer', 65000, 2),
('Senior Developer', 75000, 2),
('Dev Ops', 70000, 2),
('Server Administrator', 65000, 3),
('Hardware Support', 55000, 3),
('Networking Specialist', 60000, 3),
('Senior Lawyer', 80000, 4),
('Junior Lawyer', 70000, 4),
('Paralegal', 50000, 4),
('Senior HR Specialist', 65000, 5),
('Junior HR Specialist', 55000, 5),
('HR Secretary', 40000, 5);

INSERT INTO employees (first_name, last_name, manager_name, role_id)
VALUES
('Joe', 'Smith', 'Randy Quaid', 1 ),
('Randy', 'Quaid', 'Steve Jobs', 2),
('Brian', 'Firkus', 'Randy Quaid', 3),
('Angelo', 'Anderson', 'Joel Schumaker', 4),
('Joel', 'Schumaker', NULL, 5),
('Bobby', 'Kennedy', 'Joel Schumaker', 6),
('Randall', 'Cunningham', 'Steve Jobs', 7),
('Stephanie', 'Kasparian', 'Steve Jobs', 8),
('Angela', 'Arendts', 'Steve Jobs', 9),
('Herbie', 'Anderson', NULL, 10),
('Giuseppe', 'Verdi', 'Herbie Anderson', 11),
('Antonio', 'Gramsci', 'Herbie Anderson', 12),
('Janeae', 'Garofalo', NULL, 13),
('George', 'Eubanks', 'Janeane Garofalo', 14),
('Rudolph', 'Kensignton', 'Janeane Garofalo', 15);