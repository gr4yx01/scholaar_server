import { Response, Request } from "express";
import { prisma } from "../db";

const createState = async (req: Request, res: Response) => {
    const { states, countryId } = req.body;

    try {
        for(let state of states) {
                await prisma.state.create({
                    data: {
                        name: state?.name,
                        countryId,
                    }
                })
        }

        res.status(201).json({
            message: 'States created successfully',
        })
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

export {
    createState
}