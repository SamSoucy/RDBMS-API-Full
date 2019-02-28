const express = require('express');
const helmet = require('helmet');

const lambdaRouter = require('../lambda/lambda-router.js');
const studentsRouter = require('../lambda/students-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/lambda', lambdaRouter);
server.use('/api/student', studentsRouter);

module.exports = server;
