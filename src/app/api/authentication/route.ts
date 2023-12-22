import { PrismaClient, User } from '@prisma/client'
import { NextResponse } from 'next/server'
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const prisma = new PrismaClient()

export async function POST(req: Request) {
    const data = await req.json()
    const emailReceived = data["email"]
    const passwordReceived = data["password"]
    const user = await getUserByEmail(emailReceived);
    if (user){
        const isValidPassword = bcrypt.compareSync(passwordReceived, user?.password)
        if (isValidPassword){
            const token = await generateToken(user)
            return NextResponse.json({accessToken: token}, {status: 200});
        }
    }
    return NextResponse.json({error: 'Invalid credentials'}, {status: 401});
}

async function getUserByEmail(email: string){
    try{
        return await prisma.user.findFirst({
            where:{
                email: email
            }
        });
    } catch (error) {
        throw error;
    }finally {
        await prisma.$disconnect();
    }
}

async function generateToken(user: User){
    try{
        return jwt.sign(
        {
            userId: user.id,
            userName: user.name,
            userEmail: user.email 
        }, 
        process.env.JWT_SECRET_KEY, 
        { expiresIn: '24h' }
        );
    } catch (error) {
        throw error;
    }
}