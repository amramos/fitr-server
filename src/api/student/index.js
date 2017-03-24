import express from 'express'
import * as crud from './controllers/student.crud'
import * as history from './controllers/history'

const router = express.Router()

router.post('/:studentId/checkin', history.checkin)

export default {
  create: crud.create,
  get: crud.get,
  router,
}

