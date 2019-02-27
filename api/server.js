const express = require('express');
const helmet = require('helmet');

const rolesRouter = require('../lambda/lambda-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/lambda', rolesRouter);

module.exports = server;
