import { Router } from 'express'
import { createState, getStateUniversities } from '../controller/state'

const stateRouter = Router()

stateRouter.post('/', createState)

stateRouter.get('/:id/universities', getStateUniversities)

export default stateRouter