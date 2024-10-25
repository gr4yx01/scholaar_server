import { Response, Request } from 'express'
import { prisma } from '../db'

const createCountry = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        const created_country = await prisma.country.create({
            data: {
                name
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

const getAllCountry = async (req: Request, res: Response) => {
    try {
        const countries = await prisma.country.findMany()

        res.status(200).json({
            message: 'list of countries',
            data: countries
        })
    } catch(err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

const getCountryStates = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const states = await prisma.state.findMany({
            where: {
                countryId: id
            }
        })

        res.status(200).json({
            data: states
        })
    } catch(err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

export {
    createCountry,
    getAllCountry,
    getCountryStates
}