import { Response, Request } from "express";
import { prisma } from "../db";

const createState = async (req: Request, res: Response) => {
    const { states, countryId } = req.body;

    try {
        for(let state of states) {
                await prisma.state.createMany({
                    data: {
                        name: state?.name,
                        countryId,
                    }
                })
        }

        res.status(201).json({
            message: 'States created successfully',
            data: states
        })
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

const getStateUniversities = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const universities = await prisma.university.findMany({
            where: {
                stateId: id
            }
        })

        res.status(200).json({
            data: universities
        })

    } catch(err) {
        res.status(500).json({
            message: "Internal server error",
            error: err
        })
    }
}

export {
    createState,
    getStateUniversities
}