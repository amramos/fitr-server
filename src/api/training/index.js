let express = require('express');
let router = express.Router();
let training = require('./controllers/training.crud.js');

router.post('/', training.create);
router.get('/:trainingId', training.show);
router.put('/:trainingId', training.edit);
router.delete('/:trainingId', training.delete);

module.exports = router;
