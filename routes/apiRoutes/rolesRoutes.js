//const express = require('express');
//const router = express.Router();
const db = require('../../db/connection');
// const inputCheck = require('../../utils/inputCheck');


////////////////// VIEW ALL ROLES 12.2.5
function viewAllRoles() {
// router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            // res.status(500).json({ error: err.message });
            console.log(err);
            return;
        }
        // res.json({
        //     message: 'success',
        //     data: rows
        // });
        console.table(rows);
    });
};


///////////// // GET ROUTE FOR A SINGLE ROLE BY ID
// router.get('/roles/:role_id', (req, res) => {
//     const sql = `SELECT * FROM roles WHERE role_id = ?`;
//     const params = [req.params.role_id];

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
// function viewAllEmployees() {
// router.post('/roles', ({ body }, res) => {
//     // const errors = inputCheck(body, 'role_id', 'job_title', 'salary');
//     if (errors) {
//         const sql = `INSERT INTO roles (role_id, job_title, salary)
//         VALUES (?,?,?)`;
//       const params = [body.role_id, body.job_title, body.salary];
      
//       db.query(sql, params, (err, result) => {
//         if (err) {
//           res.status(400).json({ error: err.message });
//           return;
//         }
//         res.json({
//           message: 'success',
//           data: body
//         });
//       });
//     }
//   });

  function addRole() {
  //router.put('/roles/:role_id', (req, res) => {
    // Data validation
    // const errors = inputCheck(req.body, 'job_title'); //Check
    // if (errors) {
    //   res.status(400).json({ error: errors });
    //   return;
    // }
  
    const sql = `INSERT INTO roles (role_id, job_title; salary)`;
    //const params = [req.body.job_title, req.params.role_id]; //CHECK req.params.id or job_title?
  
    db.query(sql, params, (err, result) => {
      if (err) {
        //res.status(400).json({ error: err.message });
        console.log(err);
        return 
      }
      // } else if (!result.affectedRows) {
      //   res.json({
      //     message: 'Role not found'
      //   });
      // } else {
      //   res.json({
      //     message: 'success',
      //     data: req.body,
      //     changes: result.affectedRows
      console.table(row);
    });
    };


//////////////// ROUTE TO DELETE ROLE
// router.delete('/roles/:role_id', (req, res) => {
//     const sql = `DELETE FROM roles WHERE role_id = ?`;
//     const params = [req.params.role_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.statusMessage(400).json({ error: res.message });
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Role not found'
//             });
//         } else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.role_id
//             });
//         }
//     });
// });


module.exports = {
  viewAllRoles, addRole
};