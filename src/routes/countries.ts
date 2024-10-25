import { Router } from "express";
import { createCountry } from "../controller/countries";

const countriesRouter = Router()

countriesRouter.post('/', createCountry)

export default countriesRouter