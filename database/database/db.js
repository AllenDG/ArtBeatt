const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'schemadb'
})

module.exports = mySqlPool