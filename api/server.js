const express = require("express");

const cardsDB = require("../data/helpers/carsModel");

const carsRoute = require("./cars/carsRoute")

const server = express();

server.use(express.json());
server.use("/cars", carsRoute);

module.exports = server;