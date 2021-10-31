CREATE TABLE departments (
    dept_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    dept_id INTEGER,
    FOREIGN KEY(dept_id) REFERENCES departments(dept_id) ON DELETE SET NULL
);

CREATE TABLE employees (
    emp_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER, 
    mgr_id INTEGER,
    FOREIGN KEY(role_id) REFERENCES roles(role_id) ON DELETE SET NULL,
    FOREIGN KEY(mgr_id) REFERENCES employees(emp_id) ON DELETE SET NULL
);

