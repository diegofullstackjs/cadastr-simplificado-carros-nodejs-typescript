import {Router} from 'express'
import UserCreate from '../controllers/user.create.controller'
import UserAuth from '../controllers/user.auth.controller';

const router = Router();

router.post("/create",UserCreate)
router.post("/auth",UserAuth)

export default router;