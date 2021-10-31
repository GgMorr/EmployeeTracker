const mysql = require("mysql2"); // Import MySQL package

// Create mysql connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',// MySQL username,
      password: 'Elohim1sGod.', // MySQL password
      database: 'emp_tracker_db'
    },
    console.log('Connected to the Employee Tracker database.')
  );


  module.exports = db;