var express = require('express');
var router = express.Router();
var exercise = require('./controllers/exercise.crud.js');



router.post('/', exercise.create);
router.get('/:exerciseId', exercise.show);
router.put('/:exerciseId', exercise.edit);
router.delete('/:exerciseId', exercise.delete);

module.exports = router;
