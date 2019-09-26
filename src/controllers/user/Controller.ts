import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import UserRepository from '../../repositories/user/UserRepository';

class UserController {

    public get(req: Request, res: Response) {
        const user = new UserRepository();
        const { id } = req.query;
        console.log(req);
        user.getUser({ _id: id })
            .then((data) => {
                res.status(200).send(successHandler('User Data', 200, data));
            });
    }

    public create(req: Request, res: Response) {
        const { id, name } = req.body;
        console.log(req.body);
        const user = new UserRepository();
        user.createUser({ id, name })
            .then((data) => {
                res.status(200).send(successHandler('User Created', 200, data));
            });
    }

    public update(req: Request, res: Response) {
        const { oldName, newName } = req.query;
        const user = new UserRepository();
        user.updateUser(oldName, newName)
            .then((data) => {
                res.status(200).send(successHandler('User Updated', 200, data));
            });
    }

    public remove(req: Request, res: Response) {
        const { id } = req.params.id;
        const user = new UserRepository();
        user.delete(id)
            .then((data) => {
                res.status(200).send(successHandler('User Removed', 200, data));
            });
    }
}

export default new UserController();
