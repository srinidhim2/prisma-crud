import express from 'express';

import { prisma, createUser } from "./db"
import morgan from 'morgan'
import { userRouter } from './routes/userRouter.ts';
import { errorHandler } from './middlewares/error-handler.ts';
import dotenv from 'dotenv'

const app = express();
app.use(morgan('dev')); 
app.use(express.json())
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});
app.use('/user',userRouter)
app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`));
app.use(errorHandler)
