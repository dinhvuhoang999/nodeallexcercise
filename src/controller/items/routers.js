const routes = require('express').Router();
const controller = require('./controller');

routes.get('/', controller.getListItems);
routes.post('/new-item/', controller.newItem);
routes.put('/edit-item/:id/:name', controller.updateItem);
routes.delete('/delete-item/:id', controller.deleteItem);

module.exports = routes;


