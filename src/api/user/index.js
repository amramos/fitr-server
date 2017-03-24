import express from 'express'
import * as user from './controllers/user.crud'
import * as auth from './controllers/user.auth'

const router = express.Router()

router.post('/login', auth.login)
router.post('/register', user.create)

export default router

