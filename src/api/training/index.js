import express from 'express'
import * as training from './controllers/training.crud'

const router = express.Router()

router.post('/', training.create)
router.get('/:trainingId', training.show)
router.put('/:trainingId', training.edit)
router.delete('/:trainingId', training.remove)

export default router
