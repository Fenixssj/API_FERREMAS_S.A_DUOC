require('dotenv').config();
const express = require('express');
const connection = require('../config/config');
const app = express();


module.exports.buscar_todo = app.get('/administrador', (request, response) => {  
    const sql = `
            SELECT
                id_admin,
                Nombre
            FROM administrador
        `;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            response.status(200).send(results);
        } else {
            response.status(204).send('Sin resultado');
        }
    });               
});