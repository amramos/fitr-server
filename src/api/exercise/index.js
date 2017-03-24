import express from 'express'
import * as exercise from './controllers/exercise.crud'

const router = express.Router()

router.post('/', exercise.create)
router.get('/:exerciseId', exercise.show)
router.put('/:exerciseId', exercise.edit)
router.delete('/:exerciseId', exercise.remove)

export default router

