import express from 'express';
// import { PrismaClient, Prisma} from '@prisma/client';

import { prisma, createUser } from "./db"
import morgan from 'morgan'
import { userRouter } from './routes/userRouter.ts';
import { errorHandler } from './middlewares/error-handler.ts';
// const prisma = new PrismaClient()

const app = express();
app.use(morgan('dev')); 
app.use(express.json())
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});
app.use('/user',userRouter)
app.listen(3000, () => console.log('Server is running'));
app.use(errorHandler)
// async function createUser(user: Prisma.UserCreateInput) {
//     // const newUser = await prisma.user.create({ data: user });
//     // return newUser;
// }



// async function main() {
//     // const userInfo = {name:"raju"}
//     // const user = await createUser(userInfo)
//     // console.log(user)
//     console.log('hello')
//     await prisma.user.deleteMany()

// }

// main()
// .catch(e=>console.log(e.message))
// .finally(async ()=>
//     prisma.$disconnect()
// )