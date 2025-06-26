import { userInfo } from 'os';
import express from 'express';
import { PrismaClient, Prisma} from '@prisma/client';
import morgan from 'morgan'


const prisma = new PrismaClient()

// const app = express();
// app.use(morgan('dev')); 

// app.get('/', (req, res) => {
//   res.json({ message: 'Hello, world!' });
// });

// app.listen(3000, () => console.log('Server is running'));

// async function createUser(user: Prisma.UserCreateInput) {
//     // const newUser = await prisma.user.create({ data: user });
//     // return newUser;
// }

async function main() {
    // const userInfo = {name:"raju"}
    // const user = await createUser(userInfo)
    // console.log(user)
    console.log('hello')
}

main()
.catch(e=>console.log(e.message))
.finally(async ()=>
    prisma.$disconnect()
)