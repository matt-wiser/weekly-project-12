const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'wehttam1',
  database: 'company_db'
},

console.log("Database is running!")

);

module.exports = db;