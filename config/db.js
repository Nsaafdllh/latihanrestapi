const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'latihanrestapi'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connect to database');
});

module.exports = db;
