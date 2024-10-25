import { Router } from "express";
import { createCountry, getAllCountry, getCountryStates } from "../controller/countries";

const countriesRouter = Router()

countriesRouter.post('/', createCountry)

countriesRouter.get('/', getAllCountry)

countriesRouter.get('/:id/states', getCountryStates)

export default countriesRouter