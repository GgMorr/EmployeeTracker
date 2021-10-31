const inquire = require('inquirer');
// const express = require("express"); // Import Express
// const PORT = process.env.PORT || 3000; // Add port designation
// const app = express(); // Add app expression
const db = require('./db/connection'); // MySql db connection
// const apiRoutes = require('./routes/apiRoutes');
// const inputCheck = require('./utils/inputCheck'); // See 12.2.7, Import module to validate user data 
const questions = require('./routes/apiRoutes/app')

// Add Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use('/api', apiRoutes);


// Default response for any other request (Not Found)
// app.use((req, res) => {
//     res.status(404).end();
//   });


// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    questions();
  // Port connection
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//     });
});