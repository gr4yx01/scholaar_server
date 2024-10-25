import { Response, Request } from "express";
import { prisma } from "../db";

const createUniversity = async (req: Request, res: Response) => {
    const { universities, stateId } = req.body;

    try {
        for(let university of universities) {
            await prisma.university.createMany({
                data: {
                    name: university?.name,
                    stateId,
                }
            })
        }

        res.status(201).json({
            message: 'Universities created successfully',
            data: universities
        })
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