import express from 'express';
import { createUserDetail, deleteUserDetail, getUserDetail, updateUserDetail } from '../controllers/user.controller.js';
import loggerMiddleware from '../middleware/logger.js';

const router = express.Router();

router.get('/:userId', getUserDetail);

router.post('/', createUserDetail);

router.put('/:userId', updateUserDetail);

router.delete('/:userId', deleteUserDetail);

export default router;