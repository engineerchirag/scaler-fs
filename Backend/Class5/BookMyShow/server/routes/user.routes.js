import express from 'express';
import { getProfile, login, register } from '../controllers/user.controller.js';
import isLoggedIn from '../middlewares/authentication.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', isLoggedIn, getProfile);

export default router;