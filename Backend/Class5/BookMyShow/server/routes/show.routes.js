import { Router } from 'express';
import { createShow, listShows, showDetail } from '../controllers/show.controller.js';
import isLoggedIn from '../middlewares/authentication.js';
import authorizedRoles from '../middlewares/authorization.js';

const router = Router();

router.post('/', isLoggedIn, authorizedRoles('ADMIN'),  createShow);
router.get('/list', listShows);
router.get('/:showId', showDetail);

export default router;