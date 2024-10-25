import { Router } from 'express'
import { createLoan, fetchLoans } from '../controller/loan'

const loanRouter = Router()

loanRouter.post('/', createLoan)

loanRouter.get('/', fetchLoans)

export default loanRouter