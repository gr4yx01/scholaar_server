import express, { json } from 'express'
import countriesRouter from './routes/countries'
import stateRouter from './routes/state'
import universitiesRouter from './routes/universities'
import loanRouter from './routes/loan'
import scholarshipRouter from './routes/scholarship'

const app = express()

app.use(json())

app.use('/countries', countriesRouter)
app.use('/states', stateRouter)
app.use('/universities', universitiesRouter)
app.use('/loans', loanRouter)
app.use('/scholarships', scholarshipRouter)

app.listen('3000', () => {
    console.log('Server running on port 3000')
})