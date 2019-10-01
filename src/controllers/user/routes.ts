import { Router } from 'express';
import { TRAINEEE } from '../../libs/constants';
import { authMiddleWare } from '../../libs/routes';
import validationHandler from '../../libs/routes/validationHandler';
import Controller from './Controller';
import validation from './validation';

const userRoute: Router = Router();

console.log('Inside User routes');

userRoute.get('/get', validationHandler(validation.get),
authMiddleWare(TRAINEEE, 'read'), Controller.get);

userRoute.post('/create', validationHandler(validation.create),
authMiddleWare(TRAINEEE, 'write'), Controller.create);

userRoute.put('/update', validationHandler(validation.update),
authMiddleWare(TRAINEEE, 'update'), Controller.update);

userRoute.delete('/remove/:id', validationHandler(validation.delete),
authMiddleWare(TRAINEEE, 'delete'), Controller.remove);

userRoute.post('/login', validationHandler(validation.login), Controller.login);

userRoute.get('/me', validationHandler(validation.get), authMiddleWare(TRAINEEE, 'read'), Controller.get);

export default userRoute;
