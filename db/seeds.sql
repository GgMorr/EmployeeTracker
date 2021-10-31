INSERT INTO departments (dept_name)
VALUES 
    ("Enginerring"),
    ("Human-Resources"),
    ("Cust-Service");

    
INSERT INTO roles (job_title, salary, dept_id)
VALUES 
    ("Engineer", 122000.00, 1),
    ("Resource_Specialist", 91000.00, 2),
    ("Service_Rep", 68000.00, 3);
       

INSERT INTO employees (first_name, last_name, mgr_id, role_id)
VALUES 
    ("Wilma", "Flintstone", NULL, 2),
    ("Santa", "Clause", 1, 1),
    ("Charlie", "Brown", 1, 3),
    ("Elmer","Fudd", 1, 3);

