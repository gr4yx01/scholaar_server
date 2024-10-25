import { Router } from 'express'
import { createState } from '../controller/state'

const stateRouter = Router()

stateRouter.post('/', createState)

export default stateRouter