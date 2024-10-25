import { Router } from "express";
import { createUniversity } from "../controller/universities";

const universitiesRouter = Router()

universitiesRouter.post('/', createUniversity)

// universitiesRouter.get('/', getAllUniversities)

export default universitiesRouter