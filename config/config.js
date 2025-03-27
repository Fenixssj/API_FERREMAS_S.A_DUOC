const mysql = require('mysql');

var connection;

connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ferremas',
    port: 3306
});

connection.connect(function(err) {
    if (err) console.log(err);
});
    
module.exports = connection;  

// **************************************************************************************************************************************
//  pasos para la base de datos : Api FERREMAS S.A DUOC UC.
// **************************************************************************************************************************************
//  El primer paso debemos dejar en el terminal con este codigo: node app.js  
//  Segundo, luego le da un URL que es : http://localhost:5500/api/test/
// *************************************************************************************************************************************