import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import { successHandler } from '../../libs/routes';
import UserRepository from '../../repositories/user/UserRepository';

const user = new UserRepository();

class UserController {

    public get(req: Request, res: Response) {
        const { _id } = req.query;
        user.getUser(_id)
            .then((data) => {
                res.status(200).send(successHandler('User Data', 200, data));
            });
    }

    public create(req: Request, res: Response) {
        const { id, name } = req.body;
        user.createUser({ id, name })
            .then((data) => {
                res.status(200).send(successHandler('User Created', 200, data));
            });
    }

    public update(req: Request, res: Response) {
        const { id, newName } = req.query;
        user.updateUser({ _id: id, name: newName }).then((data) => {
            res.status(200).send(successHandler('USer Updated', 200, data));
            console.log('User Updated ');
        });
    }

    public remove(req: Request, res: Response) {
        const { id } = req.params.id;
        user.delete(id)
            .then((data) => {
                res.status(200).send(successHandler('User Removed', 200, data));
            });
    }

    public login(req: Request, res: Response, next: NextFunction) {
        const { email } = req.body;
        console.log('Inside User Controller Login');
        user.getUser({ email })
            .then((userData) => {
                if (!userData) {
                    next({ err: 'Not Found', status: 404, message: 'Route Not Found' });
                }

                const { password } = userData;
                if (!bcrypt.compareSync(req.body.password, password)) {
                    next('Password does not match');
                }
                const token = jwt.sign(userData.toJSON(), configuration.key, {
                    expiresIn: 3600,
                });
                res.send({
                    data: token,
                    message: 'login successfully',
                    status: 200,

                });
            });
    }
}

export default new UserController();
