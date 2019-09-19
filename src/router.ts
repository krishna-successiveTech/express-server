import { Request, Response, Router } from 'express';
import { traineeRoutes } from './controllers/trainee';

const router: Router = Router();

router.use('/trainee', traineeRoutes);

export default router;
