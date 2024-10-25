import express, { json } from 'express'
import countriesRouter from './routes/countries'
import stateRouter from './routes/state'

const app = express()

app.use(json())

app.use('/countries', countriesRouter)
app.use('/states', stateRouter)

app.listen('3000', () => {
    console.log('Server running on port 3000')
})