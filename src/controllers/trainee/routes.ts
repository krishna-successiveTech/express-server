import { Router } from 'express';
import { HEAD_TRAINER, TRAINEEE, TRAINER } from '../../libs/constants';
import { authMiddleWare } from '../../libs/routes';
import validationHandler from '../../libs/routes/validationHandler';
import Controller from './Controller';
import validation from './validation';

const traineeRouter: Router = Router();

traineeRouter.get('/get', validationHandler(validation.get), authMiddleWare(TRAINEEE, 'read'), Controller.get);

traineeRouter.post('/create', validationHandler(validation.create),
authMiddleWare(TRAINEEE, 'write'), Controller.create);

traineeRouter.put('/update', validationHandler(validation.update),
authMiddleWare(TRAINEEE, 'update'), Controller.update);

traineeRouter.delete('/remove/:id', validationHandler(validation.delete),
authMiddleWare(TRAINEEE, 'delete'), Controller.remove);

export default traineeRouter;
