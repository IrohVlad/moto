import userController from "../controllers/userController.js";
import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
const router = Router();


router.post('/reg', userController.register);
router.post('/log', userController.login);
router.post('/auth', auth, userController.authCheck);

export default router