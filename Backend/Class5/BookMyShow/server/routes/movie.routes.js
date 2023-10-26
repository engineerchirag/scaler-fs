import { Router } from 'express';
import { createMovie, getMovies } from '../controllers/movie.controller.js';
import isLoggedIn from '../middlewares/authentication.js';
import authorizedRoles from '../middlewares/authorization.js';

const router = Router();

router.post('/', isLoggedIn, authorizedRoles('ADMIN'), createMovie);
router.get('/list', getMovies);

export default router;