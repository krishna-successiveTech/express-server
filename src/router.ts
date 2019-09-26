import { Request, Response, Router } from 'express';
import { traineeRoutes } from './controllers/trainee';
import { userRoutes } from './controllers/user';

const router: Router = Router();

router.use('/trainee', traineeRoutes);

router.use('/user', userRoutes);

export default router;
