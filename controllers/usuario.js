require('dotenv').config();
const express = require('express');
const connection = require('../config/config');

const router = express.Router(); // Usamos Router en vez de `app`

// Definir la ruta correctamente
router.get('/', (request, response) => {  
    const sql = `
        SELECT
            id_admin,
            Nombre,
            Apellido,
            Correo
        FROM usuario;
    `;

    connection.query(sql, (error, results) => {
        if (error) {
            console.error("Error en la consulta:", error);
            response.status(500).send("Error en el servidor");
            return;
        }
        if (results.length > 0) {
            response.status(200).json(results);
        } else {
            response.status(204).send('Sin resultado');
        }
    });               
});

module.exports = router; 