var express = require('express');
var crud = require('./controllers/student.crud')
var history = require('./controllers/history');

var router = express.Router();


router.post('/:studentId/checkin', history.checkin);

module.exports = {
  create: crud.create,
  get: crud.get,
  router: router
}

