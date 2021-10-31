const express = require("express"); // Import Express
const PORT = process.env.PORT || 3000; // Add port designation
const app = express(); // Add app expression
const mysql = require("mysql2"); // Import MySQL package

const inputCheck = require('./utils/inputCheck'); // Import module to validate user data

// Add Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Create mysql connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Elohim1sGod.',
      database: 'emp_tracker_db'
    },
    console.log('Connected to the Employee Tracker database.')
  );
  



// // Express route connection
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

///////////////////////// QUERIES ///////////////////////


//////////////////////// GET ALL EMPLOYEES /////////////////
// QUERY EMPLOYEE TABLE
// db.query(`SELECT * FROM employees` , (err, rows) => {
//     console.log(rows);
// });

// GET ROUTE TO GET AN ALL EMPLOYEES JSON LIST 12.2.5
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  ///////////////////// END ALL EMPLOYEES /////////////////


/////////////////////// GET SINGLE EMPLOYEE //////////////
// 
// QUERY EMPLOYEE BY ID
// db.query(`SELECT * FROM employees WHERE emp_id = 8888`, (err, row) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(row);
// });


// GET ROUTE FOR A SINGLE CANDIDATE BY ID
app.get('/api/employees/:emp_id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE emp_id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });
  

//////////////////////// END GET SINGLE EMPLOYEE ////////////////


////////////////////// DELETE ROUTE //////////////////////

// DELETE EMPLOYEE
// db.query(`DELETE FROM employees WHERE emp_id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

//////////////// DELETE EMPLOYEE ROUTE /////////////////

app.delete('/api/employees/:emp_id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });

///////////////////////// END DELETE ROUTE //////////////////



  
  //////////////////// CREATE NEW EMPLOYEE POST WITH INPUT VALIDATION  ////////////////////////////

app.post('/api/employees', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'emp_id');
    if (errors) {
        const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
        VALUES (?,?,?)`;
      const params = [body.first_name, body.last_name, body.industry_connected];
      
      db.query(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: 'success',
          data: body
        });
      });
    }
  });
///////////////////////// END CREATE EMPLOYEE POST SEE 12.2.7 ///////////////////////



///////////////////////// END QUERIES ///////////////////////


// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });


// // Default response for any other request (Not Found)
// app.use((req, res) => {
//     res.status(404).end();
//   });


  // Port connection
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});