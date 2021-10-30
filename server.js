const express = require("express"); // Import Express
const PORT = process.env.PORT || 3000; // Add port designation
const app = express(); // Add app expression
const mysql = require("mysql2"); // Import MySQL package

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

db.query('SELECT * FROM employees' , (err, rows) => {
    console.log(rows);
});




// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });



  // Port connection
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});