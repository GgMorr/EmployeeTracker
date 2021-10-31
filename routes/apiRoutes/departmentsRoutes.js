const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
// const inputCheck = require('../../utils/inputCheck');


////////////////// GET ROUTE FOR AN ALL ROLES JSON LIST 12.2.5
function viewAllDepartments() {
// router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) {
            // res.status(500).json({ error: err.message });
            console.log(err);
            return;
        }
        // res.json({
        //     message: 'success',
        //     data: rows
        console.table(rows);
        });
    };


///////////// // GET ROUTE FOR A SINGLE ROLE BY ID

// router.get('/departments/:dept_id', (req, res) => {
//     const sql = `SELECT * FROM departments WHERE dept_id = ?`;
//     const params = [req.params.dept_id];

//     db.query(sql, params, (err, row) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });


//////////////////// POST ROUTE INCLUDES INPUT VALIDATION 
function addDepartment() {
// router.post('/departments', ({ body }, res) => {
    // const errors = inputCheck(body, 'dept_id', 'dept_name');
    // if (errors) {
        const sql = `INSERT INTO departments (dept_id, dept_name)
        VALUES (?,?,?)`;
    //   const params = [body.dept_id, body.dept_name];
      
      db.query(sql, params, (err, result) => {
        if (err) {
        //   res.status(400).json({ error: err.message });
        console.log(err);
          return;
        }
        // res.json({
        //   message: 'success',
        //   data: body
        // });
        console.table(row);
      });
    };




//////////////// ROUTE TO DELETE ROLE
// router.delete('/departments/:dept_id', (req, res) => {
//     const sql = `DELETE FROM departments WHERE dept_id = ?`;
//     const params = [req.params.dept_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.statusMessage(400).json({ error: res.message });
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Department not found'
//             });
//         } else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.dept_id
//             });
//         }
//     });
// });


module.exports = {
    viewAllDepartments, addDepartment
}