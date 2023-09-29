const info = require('express').Router();

const { Infocontroller } = require('../controllers/InfoController')
const { InfocontrollerbyId } = require('../controllers/InfoControllerbyId')

info.get('/infoCicloParking', Infocontroller)
info.get('/infoCicloParking/:Id', InfocontrollerbyId)

module.exports = info;