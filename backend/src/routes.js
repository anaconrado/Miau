const express = require('express');

const DoadorController = require('./controllers/DoadorController');
const GatoController = require('./controllers/GatoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/doadores', DoadorController.index);
routes.post('/doadores', DoadorController.create);

routes.get('/profile', ProfileController.index);

routes.get('/gatos', GatoController.index); 
routes.post('/gatos', GatoController.create);
routes.delete('/gatos/:id', GatoController.delete);

module.exports = routes;

 
