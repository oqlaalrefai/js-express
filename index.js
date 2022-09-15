'use strict';
const Server = require('./server')
require('dotenv').config();

const port = process.env.PORT
// start method is to start server I export it from the server file 
Server.start(port || 3000)
