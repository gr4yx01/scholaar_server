import { Router } from 'express'
import { createLoan, fetchLoans } from '../controller/loan'

const loanRouter = Router()

loanRouter.post('/', createLoan)

loanRouter.get('/:universityId', fetchLoans)

export default loanRouter