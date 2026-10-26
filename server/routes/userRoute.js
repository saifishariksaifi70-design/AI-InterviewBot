import express from 'express'
import { getCurrentUser } from '../controllers/userController.js'
import isAuth from '../middleware/isAuth.js'

const userRoute = express.Router()

userRoute.get('/currentUser',isAuth,getCurrentUser)

export default userRoute