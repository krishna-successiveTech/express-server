import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import Controller from './Controller';
import validation from './validation';

const traineeRouter: Router = Router();

traineeRouter.get('/get', validationHandler(validation.get), Controller.get);
traineeRouter.post('/create', validationHandler(validation.create), Controller.create);
traineeRouter.put('/update', validationHandler(validation.update), Controller.update);
traineeRouter.delete('/remove/:id', validationHandler(validation.delete), Controller.remove);

export default traineeRouter;
