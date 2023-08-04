import { Router } from "express";
import userRouter from './userRouter.js'
import bookRouter from './bookRouter.js'

const router = Router();

router.use('/user', userRouter)
router.use('/book', bookRouter)
export default router;