var express = require('express');
var router = express.Router();
var user = require('./controllers/user.crud');
var auth = require('./controllers/user.auth');


router.post('/login', auth.login);
router.post('/register', user.create);

router.get('/:userId/exercises', user.getExercisesFromUser);

module.exports = router;


