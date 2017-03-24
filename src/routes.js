const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')

const user = require('./api/user')
const exercise = require('./api/exercise')
const training = require('./api/training')

module.exports = function(app){
  app.use('/user', user);
  app.use('/exercise', exercise)
  app.use('/training', training)
  // application
  // se fosse colocar o front no mesmo rep, ou se a gente precisar de páginas administrativas
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html') // load the single view file (angular will handle the page changes on the front-end)
  })
}
