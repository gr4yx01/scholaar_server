import { Router } from 'express'

import { createScholarship, fetchScholarshipByName, getScholarshipByMajorAndCountry, getScholarship } from '../controller/scholarship'

const scholarshipRouter = Router()

scholarshipRouter.post('/', createScholarship)

scholarshipRouter.post('/search', fetchScholarshipByName)

scholarshipRouter.post('/query', getScholarshipByMajorAndCountry)

scholarshipRouter.get('/:id', getScholarship)

export default scholarshipRouter