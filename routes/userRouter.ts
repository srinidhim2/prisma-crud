import express from 'express'
import { createUserController, deleteUserContoller, getallUsersController, getUserByEmailController, updateUserController } from '../controllers/userController.ts'

const app  = express()

export const userRouter = express.Router()

userRouter.post('/',createUserController)
userRouter.get('/all',getallUsersController)
userRouter.get('/:email',getUserByEmailController)
userRouter.put('/:email',updateUserController)
userRouter.delete('/:email', deleteUserContoller)