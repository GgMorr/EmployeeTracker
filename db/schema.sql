CREATE TABLE departments (
    dept_id INTEGER PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);


CREATE TABLE roles (
    role_id INTEGER PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);


CREATE TABLE employees (
    emp_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

