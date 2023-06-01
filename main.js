const app = require('express')();
const bodyParser = require('body-parser');
const routers = require('./src/routers');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routers);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('run port', port);
});