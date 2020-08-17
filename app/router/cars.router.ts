import {Router} from 'express'
import {CreateCar,list } from '../controllers/cars.controller'
import UserMiddleware from '../middleware/auth.middleware'
const router = Router();

router.post("/create",[UserMiddleware],CreateCar)

router.get("/list",list)

export default router;