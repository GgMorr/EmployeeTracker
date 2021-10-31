//const express = require('express');
//const router = express.Router();
const db = require('../../db/connection');
// const inputCheck = require('../../utils/inputCheck');

////////////////// GET ROUTE FOR AN ALL EMPLOYEES JSON LIST 12.2.5
function viewAllEmployees() {
    const sql = `SELECT * FROM employees`;
        db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    });
};

///////////// // GET ROUTE FOR A SINGLE CANDIDATE BY ID
function viewEmpById() {
    const sql = `SELECT * FROM employees WHERE emp_id = ?`;
    db.query(sql, params, (err, row) => {
        if (err) {
            console.log(err);;
            return;
        }
        console.table(row);
        });
     };
//////////////////// POST ROUTE INCLUDES INPUT VALIDATION 
function addEmployee() {
//router.post('/employees', ({ body }, res) => {
    // const errors = inputCheck(body, 'first_name', 'last_name', 'emp_id');
    // if (errors) {
    const sql = `INSERT INTO employees (first_name, last_name, emp_id)
    VALUES (?,?,?)`;
      //const params = [body.first_name, body.last_name, body.emp_id];
      db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
          //res.status(400).json({ error: err.message });
          return;
        }
        // res.json({
        //   message: 'success',
        //   data: body
        console.table(row);
        });
    };




//////////////// DELETE EMPLOYEE ROUTE 
// router.delete('/employees/:emp_id', (req, res) => {
//     const sql = `DELETE FROM employees WHERE emp_id = ?`;
//     const params = [req.params.emp_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.statusMessage(400).json({ error: res.message });
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Employee not found'
//             });
//         } else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.emp_id
//             });
//         }
//     });
// });


module.exports = {
    viewAllEmployees, viewEmpById, addEmployee
};

