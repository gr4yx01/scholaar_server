import express, { json } from 'express'
import cors from 'cors'
import countriesRouter from './routes/countries'
import stateRouter from './routes/state'
import universitiesRouter from './routes/universities'
import loanRouter from './routes/loan'
import scholarshipRouter from './routes/scholarship'
import authRouter from './routes/auth'

const app = express()

app.use(json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/countries', countriesRouter)
app.use('/states', stateRouter)
app.use('/universities', universitiesRouter)
app.use('/loans', loanRouter)
app.use('/scholarships', scholarshipRouter)

app.listen('4000', () => {
    console.log('Server running on port 4000')
})