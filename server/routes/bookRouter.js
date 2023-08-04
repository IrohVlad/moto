import {Books} from '../models/model.js'
import { Router } from 'express'
import bookController from '../controllers/bookController.js';

const router = Router();

router.get('/', bookController.getAll)
router.post('/', bookController.create)

export default router