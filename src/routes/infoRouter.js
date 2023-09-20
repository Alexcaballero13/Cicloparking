const info = require('express').Router();

const { Infocontroller } = require('../controllers/InfoController')

info.get('/infoCicloParking', Infocontroller)

module.exports = info;