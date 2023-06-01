const routes = require('express').Router();

const routesCar = require('../controller/cars/routers');
const routesItem = require('../controller/items/routers');

routes.use('/cars', routesCar);
routes.use('/items', routesItem);

module.exports = routes;