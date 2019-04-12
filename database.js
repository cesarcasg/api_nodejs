const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'task',
    password: 'task',
    database: 'demo'
});

// connect to database
mc.connect();

module.exports = mc; 
