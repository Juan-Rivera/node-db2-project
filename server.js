const express = require('express');

const db = require('./data/dbConfig');

const server = express();

server.use(express.json());


const carsRouter = require('./cars/carsRouter');
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is up' });
});

module.exports = server;