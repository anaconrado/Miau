const express = require('express');

const routes = express.Routes();
 
routes.post('/user', (request, response) => {
    const body = request.body;

    console.log(body);

    return response .json({
        evento: 'jfodif',
        aluno: 'Ana'
    });
});

module.exports = routes;


