import { Response, Request } from 'express'
import { prisma } from '../db'

const createCountry = async (req: Request, res: Response) => {
    const { country } = req.body;

    try {
        const created_country = await prisma.country.create({
            data: {
                name: country.name
            },
        })

        res.status(201).json({
            message: 'Countries created successfully',
            data: created_country
        })
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

export {
    createCountry
}