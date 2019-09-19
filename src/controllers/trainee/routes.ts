import { Router } from 'express';
import Controller from './Controller';

const traineeRouter: Router = Router();

traineeRouter.get('/get', Controller.get);
traineeRouter.post('/create', Controller.create);
traineeRouter.put('/update', Controller.update);
traineeRouter.delete('/remove', Controller.remove);

export default traineeRouter;
