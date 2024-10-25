import { Response, Request } from "express";
import { prisma } from "../db";

const createUniversity = async (req: Request, res: Response) => {
    const { universities } = req.body;
    
    try {
        
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

export {
    createUniversity
}