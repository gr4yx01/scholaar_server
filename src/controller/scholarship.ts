import { Request, Response } from 'express'
import { prisma } from '../db'

const createScholarship = async (req: Request, res: Response) =>  {
    const { name, sponsor, deadline, field_of_study, amount, url, description, number_of_award, nationality, host_country } = req.body

    try {
        const scholarship = await prisma.scholarship.create({
            data: {
                name,
                sponsor,
                deadline,
                field_of_study,
                amount,
                url,
                description,
                number_of_award,
                nationality,
                host_country
            }
        })

        res.status(200).json({
            message: 'scholarship created',
            data: scholarship
        })
    } catch(err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

const fetchScholarshipByName = async (req: Request, res: Response) => {
    const { name } = req.body
    try {
            const scholarships = await prisma.scholarship.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            })

            res.status(200).json({
                message: 'list of scholarships',
                data: scholarships
            })
    } catch(err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

const getScholarshipByMajorAndCountry = async (req: Request, res: Response) => {
    try {
        const { major, country } = req.body

        console.log(country)

        const scholarships = await prisma.scholarship.findMany({
            where: {
                OR: [
                    major ? { field_of_study: { has: major } } : {},
                    country ? { nationality: { has: country } } : {}
                ]
            }
        });
        
        res.status(200).json({
            message: 'list of scholarships',
            data: scholarships
        })
    } catch(err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

const getScholarship = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const scholarship = await prisma.scholarship.findUnique({
            where: {
                id
            }
        })

        res.status(200).json({
            message: 'scholarship detail',
            data: scholarship
        })
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

export {
    createScholarship,
    fetchScholarshipByName,
    getScholarshipByMajorAndCountry,
    getScholarship
}