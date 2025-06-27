// import { udpateUser, udpateUser, getUse } from './../db';
// import { getUserByEmailController } from './../contollers/userController';
// import { isAwaitKeyword } from 'typescript';
import { prisma, createUser, getUserByEmial, getAllUsers, udpateUser, deleteUser } from '../db.ts';
import { HttpError } from '../utils/httpError.ts';
import { Request, Response, NextFunction } from 'express';
// import {prisma,createUser}
export const createUserController = async (req:any,res:any,next:any)=>{
     try {
    const user = req.body;

    // Check if a user with the same email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
        if (existingUser) {
            throw new HttpError('User with this email already exists', 409);
        }
    }

    const newUser = await createUser(user);
    return res.status(201).json({ newUser });

  } catch (error) {
    next(error)
  }
}

export const getUserByEmailController = async (req:any,res:any,next:any)=>{
    try {
        const email = req.params.email
        const user = await getUserByEmial(email)
        if(!user){
            throw new HttpError('User Not Found',404)
        }
        return res.status(200).json({user})
    } catch (error) {
        next(error)
    }
}

export const getallUsersController = async (req:any, res:any, next:any)=>{
  try {
    const users = await getAllUsers()
    if(!users)
      throw new HttpError('No Users Found',404)
    return res.status(200).json({noOfUsers:users.length,users})
  } catch (error) {
    next(error)
  }
}

export const updateUserController = async (req:any, res:any, next:any)=>{
  try {
    const email = req.params.email
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!existingUser) {
            throw new HttpError('User not found', 404)
    }
    const udpatedUser = await udpateUser(email, req.body)
    return res.status(202).send({'message':'userUpdated',udpatedUser})
  } catch (error) {
    next(error)
  }
}

export const deleteUserContoller = async (req:any, res:any, next:any)=>{
  try {
    const email = req.params.email
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });
    console.log(existingUser)
    if (!existingUser) {
            throw new HttpError('User not found', 404)
    }
    const deletedUser = await deleteUser(email)
    return res.status(201).send({deletedUser})

  } catch (error) {
    next(error)
  }
}