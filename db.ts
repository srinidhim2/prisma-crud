import { PrismaClient, Prisma} from '@prisma/client';
import { emit } from 'process';
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

export const udpateUser = async(email:any,user:any)=>{
    const updatedUser = await prisma.user.update({where:{email:email},data:{name:user.name,age:user.age}})
    return updatedUser
}

export const deleteUser = async (email:string)=>{
    const deletedUser = await prisma.user.delete({where:{
        email:email
    }})
    return deleteUser
}