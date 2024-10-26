import { Request, Response } from 'express'
import { prisma } from '../db'

const createLoan = async (req: Request, res: Response) => {
    const { name, fixed_rate_min, fixed_rate_max, variable_rate_min, variable_rate_max, description_one, description_two, description_three, url, universityId } = req.body

    try {
        const created_loan = await prisma.loan.create({
            data: {
                name,
                fixed_rate_min,
                fixed_rate_max,
                variable_rate_min,
                variable_rate_max,
                description_one,
                description_two,
                description_three,
                url
            },
        })

        await prisma.loanUniversity.create({
            data: {
                loanId: created_loan.id,
                universityId
            }
        })

        res.status(201).json({
            message: 'Loan created successfully',
            data: created_loan
        })
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

const fetchLoans = async (req: Request, res: Response) => {
    const { universityId } = req.params

    try {
        const loans = await prisma.loanUniversity.findMany({
            where: {
                universityId
            },
            include: {
                loan: true
            }
        })

        res.status(200).json({
            message: 'loan list',
            data: loans
        })
    } catch(err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    }
}

export {
    createLoan,
    fetchLoans
}