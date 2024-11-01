import { Request, Response } from "express";
import * as argon from 'argon2'
import { prisma } from "../db";
import jwt from "jsonwebtoken";

const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    // const { error } = userSchema.validate(req.body)

    // if(error) {
    //     res.status(400).send({ message: error.details[0].message });
    //     return;
    // }

    try {
        // check if user exist
        const emailExists = await prisma.student.findFirst({
            where: {
                email
            }
        })

        if(emailExists) {
            return res.status(400).json({
                message: 'Email already exist'
            })
        }

        const hashPassword = await argon.hash(password)

        const user = await prisma.student.create({
            data: {
                name,
                email,
                password: hashPassword
            }
        })

        const data = {
            name,
            userId: user.id,
            hashPassword,
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined");
        }
        const token = jwt.sign(data, secret, {
            expiresIn: '3h'
        });

        res.status(201).json({
            message: 'User created successfully',
            data: token
        })
    } catch (err: any) {
        res.status(500).json({
            message: err?.message,
            error: err
        })
    }
}

const loginUser = async (req: Request, res: Response) => {
    const { email } = req.body

    try {
        const userExist = await prisma.student.findFirst({
            where: {
                email
            }
        })

        if(!userExist) {
            res.status(404).json({
                message: 'No account found'
            })
            return;
        }

    const data = {
        name: userExist?.name,
        userId: userExist?.id,
        password: userExist?.password
    }

    const secret = process.env.JWT_SECRET

    if(secret) {
        const token = jwt.sign(data,secret, {
            expiresIn: '3h'
        })

        res.status(200).json({
            message: 'Login successful',
            data: token
        })
    }
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export {
    registerUser,
    loginUser
}