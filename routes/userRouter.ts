import express from 'express'
import { createUserController, getallUsersController, getUserByEmailController } from '../controllers/userController.ts'

const app  = express()

export const userRouter = express.Router()

userRouter.post('/',createUserController)
userRouter.get('/all',getallUsersController)
userRouter.get('/:email',getUserByEmailController)
