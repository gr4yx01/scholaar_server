import { Router } from 'express'

import { createScholarship, fetchScholarships } from '../controller/scholarship'

const scholarshipRouter = Router()

scholarshipRouter.post('/', createScholarship)

scholarshipRouter.get('/', fetchScholarships)

export default scholarshipRouter