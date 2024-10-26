import { Router } from 'express'

import { createScholarship, fetchScholarshipByName, getScholarshipByMajorAndCountry } from '../controller/scholarship'

const scholarshipRouter = Router()

scholarshipRouter.post('/', createScholarship)

scholarshipRouter.post('/search', fetchScholarshipByName)

scholarshipRouter.post('/query', getScholarshipByMajorAndCountry)

export default scholarshipRouter