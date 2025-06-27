import { PrismaClient, Prisma} from '@prisma/client';
export const prisma = new PrismaClient()


export const createUser = async (user: Prisma.UserCreateInput)=>{
    console.log(user)
    const newUser = prisma.user.create({data:user,include:{
        userPreference:true
    }})
    // const newUser = prisma.user.create({data:user,select:{
    //     name:true,
    //     userPreference:{
    //         select:{
    //             id:true
    //         }
    //     }
    // }})///select
    return newUser
}

export const getUserByEmial = async (email:string)=>{
    const user =await prisma.user.findUnique({where:{
        email:email
    },include:{
        userPreference:true
    }})
    return user
}

export const getAllUsers = async ()=>{
    const users = await prisma.user.findMany({include:{
        userPreference:true
    }})
    return users

}