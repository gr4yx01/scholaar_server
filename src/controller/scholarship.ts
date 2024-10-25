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

const fetchScholarships = async (req: Request, res: Response) => {
    const { name, major, country, host_country } = req.body
    try {
        if(major == '' && host_country == '') {
            const scholarships = await prisma.scholarship.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            });

            res.status(200).json({
                message: 'list of scholarships',
                data: scholarships
            })
        }else {
            const scholarships = await prisma.scholarship.findMany({
                where: {
                    field_of_study: {
                        has: major
                    },
                    host_country: {
                        has: host_country
                    }
                }
            });
            
            res.status(200).json({
                message: 'list of scholarships',
                data: scholarships
            })
        }
    } catch(err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

export {
    createScholarship,
    fetchScholarships
}