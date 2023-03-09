const { Router } = require('express');
const controller = require('../controllers/authController');
const routes = Router();

routes.get('/signup', controller.signup);
routes.post('/signup', controller.signup_post);
routes.get('/login', controller.login);
routes.post('/login', controller.login_post);

module.exports = routes;