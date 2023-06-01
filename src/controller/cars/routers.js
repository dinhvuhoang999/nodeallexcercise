const routes = require('express').Router();
const controller = require('./controller');

routes.get('/', controller.getListCars);
routes.get('/car-details/:id', controller.getListCarDetails);
routes.post('/new-car', controller.newCar);
routes.put('/update-car/:id/:name', controller.updateCar);
routes.delete('/delete-car/:id', controller.deleteCar);

module.exports = routes;
