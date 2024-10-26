import { Router } from 'express'

import { createScholarship, fetchScholarshipByName, getScholarshipByMajorAndCountry } from '../controller/scholarship'

const scholarshipRouter = Router()

scholarshipRouter.post('/', createScholarship)

scholarshipRouter.get('/', fetchScholarshipByName)

scholarshipRouter.get('/query', getScholarshipByMajorAndCountry)

export default scholarshipRouter